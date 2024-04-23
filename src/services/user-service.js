import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post('/api/v1/user/register',user)
    .then((response)=>response.data);
}