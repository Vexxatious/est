import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ConfirmPopUp from '../components/ConfirmPopUp';
import router from 'next/router';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [isVisible, setVisible] = useState(false);
    function showPopUp () {
    return (
        isVisible? <ConfirmPopUp></ConfirmPopUp> : <></>
    )
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
          {showPopUp()}
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Kayıt Ol
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
               .. My Name Is Sergio Cikilot But Everybody Calls Me  <Link marginLeft={48} color={'blue.400'} onClick={()=> router.push("https://github.com/SergioCikilot")}>Sego 🤖</Link> 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>İsim</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Soyisim</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>E-Posta Adresi</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Şifre</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={()=>{setVisible(true); router.push("/")}}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>                    
                  Kayıt Ol                  
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Zaten Bir Hesabın Var Mı ?  <Link color={'blue.400'} onClick={() => router.push("/")}>Giriş Yap</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
