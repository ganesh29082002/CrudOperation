import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { addUser } from '../service/api';
import {useNavigate} from 'react-router-dom'
const defaultvalue ={
  title:"",
  price:"",
  image:"",
  details:""
}
export default function Form1() {
  const [user , setUser] = useState(defaultvalue);
  const navigate=useNavigate();
  const inputChange =(e)=>{
    e.preventDefault();
   setUser({...user,[e.target.name] : e.target.value} )
   console.log(user)
  }

 const saveData =async()=>{
  await  addUser(user);
  
 }
  return (
    <div>
      <Form className='container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="productName" onChange={(e)=>inputChange(e)} name="title" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" onChange={(e)=>inputChange(e)} name="price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="image" onChange={(e)=>inputChange(e)} name="image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="details" onChange={(e)=>inputChange(e)} name="details" />
      </Form.Group>
     
      <Button variant="primary" onClick={()=>saveData()} type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
