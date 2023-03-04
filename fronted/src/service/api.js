import React from 'react'
import axios from 'axios'
export const addUser=async(data)=>{
const url ='http://localhost:4000/api/products';
try {
  
  return  await axios.post(`${url}/`,data);
} catch (error) {
    console.log("error occur in api.js in post method",error);
}

}

export const getUsers=async()=>{
  const url ='http://localhost:4000/api/products';
  try {
    
    return  await axios.get(`${url}/`);
  } catch (error) {
      console.log("error occur in api.js in get method",error);
  }
  
  }

  export const getUser=async(id)=>{
    const url ='http://localhost:4000/api/products';
    try {
      
      return  await axios.get(`${url}/${id}`);
    } catch (error) {
        console.log("error occur in api.js in get method",error);
    }
    
    }
  
    
    // export const editUser=async(id,)=>{
    //   const url ='http://localhost:4000/api/products';
    //   try {
        
    //     return  await axios.get(`${url}/${id}`);
    //   } catch (error) {
    //       console.log("error occur in api.js in get method",error);
    //   }
      
    //   }

      export const editUser = async (id, user) => {
        const url ='http://localhost:4000/api/products';
        return await axios.put(`${url}/${id}`, user);
    }

    export const  deleteProduct = async(id) =>{
      const url ='http://localhost:4000/api/products';
      return await axios.delete(`${url}/${id}`);
      
    }