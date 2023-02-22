import axios from 'axios';

const URL = 'https://flipkartshoppingclone.onrender.com';

export const authenticateSignup = async(data) =>{
    try{
       return await axios.post(`/api/signup`,data)
    } catch(err){
        console.log(`Error while calling sigup API`,err);
        return err.response;
    }
}

export const authenticateLogin = async(data) =>{
    try{
        return await axios.post(`/api/login`,data)
    }catch(err){
        console.log(`Error while calling Login API`,err);
        return err.response;
    }
    // return await fetch('/signin',{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"Application/json"
    //   },
    //   body:JSON.stringify(
    //     data
    //   )
    // });
}
export const authenticateLogout = async() =>{
    try{
       
          return await axios.get(`/api/logout`, {credentials:"include"})
    }catch(err){
        console.log(`Error while calling Logout API`,err);
        return err.response;
    }
}
export const getDataUser = async() =>{
    try{
       
          return await axios.get(`/api/getUserData`, {credentials:"include"})
    }catch(err){
        console.log(`Error while calling User Data API`,err);
        return err.response;
    }
}
export const deleteUser = async(_id) =>{
    try{
       
        return await axios.delete(`/api/deregister/${_id}`, {credentials:"include"})
  }catch(err){
      console.log(`Error while calling Delete API`,err);
      return err.response;
  }
}



