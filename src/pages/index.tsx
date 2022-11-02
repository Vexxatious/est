import { NextPage } from "next";
import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  IconProps,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import Section from "../utils/section";
import { useRouter } from "next/router";
import authenticate from "../services/authService";

import jwtDecode from "jwt-decode";
import axios from "axios";
import { setCookie } from "cookies-next";
import { Form, Formik } from "formik";

const Home : NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authData, setAuthData] = useState();
  const router = useRouter();

  function handleLogin(values: any) {
    authenticate(values.email, values.password).then(async (resp) => {
      try {
        if (resp.status === 200) {
          let token = await resp.headers["authorization"];
          setCookie("auth", token);
          router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Section delay={0.1}>
          {" "}
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Hesabına Giriş Yap</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Hesabın Yok mU ?{" "}
              <Link color={"blue.400"} onClick={() => router.push("/signup")}>
                Hesap Oluştur
              </Link>{" "}
              ✌️
            </Text>
          </Stack>
        </Section>

        <Section delay={0.5}>
          {" "}
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => handleLogin(values)}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form>
                    <FormLabel>Kullanıcı Adı</FormLabel>
                    <Input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <FormLabel>Şifre</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Beni Hatırla</Checkbox>
                        <Link color={"blue.400"}>Şifreni mi Unuttun ?</Link>
                      </Stack>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type={"submit"}
                      >
                        Giriş Yap
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Stack>
          </Box>
        </Section>

        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
        <Blur
          position={"absolute"}
          top={-10}
          right={-80}
          style={{ filter: "blur(70px)" }}
        />
        <Blur
          position={"absolute"}
          top={+80}
          right={-80}
          style={{ filter: "blur(70px)" }}
        />
      </Stack>
    </Flex>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="Background"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};


export default Home;
