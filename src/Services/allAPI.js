import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

// 1) register user
export const registerAPI= async(reqBody)=>{
    return await commonAPI("post",`${BASE_URL}/user/register`,reqBody,"")
}