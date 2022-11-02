import axios from "axios";

const apiUrl = "https:/testapi-lac-three.vercel.app/";

export async function sendGetRequest(endpoint: string, token: any) {
  var resp = await axios.get(apiUrl + endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "Accept" : "application/json"
    },
  });
  return resp;
}