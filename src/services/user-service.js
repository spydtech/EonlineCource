import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios
    .post('/api/register/user',user)
    .then((response)=>response.data);
}