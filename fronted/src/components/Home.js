import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getUsers , deleteProduct } from '../service/api'
import Table  from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
export default function Home() {

  const [users,setUser] = useState([]);
  useEffect((req,res)=>{
    GetAllUser();
  },[]);
  
  const GetAllUser=async()=>{
    const  response = await getUsers();
    console.log(response);
    
    setUser(response.data);    
  }
  const deleteProductDetails=async(id)=>{ 
    await deleteProduct(id);
    GetAllUser();
  }
  return (
    <div className='container'>
      <h1>HIII I AM GANESH </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Discription</th>

        </tr>
      </thead>
      <tbody>
       {
       users.map((user1)=>(
        <tr>
          
          <td>{user1._id}</td>
          <td>{user1.title}</td>
          <td>{user1.price}</td>
          <td>{user1.image}</td>
          <td>{user1.details}</td>
          <td> 
          <Link to={`/Edit/${user1._id}`}>
          <Button className='m-2' variant="success" >Edit</Button>
          </Link>
         
          <Button className='m-2' variant="danger" onClick={()=>deleteProductDetails(user1._id)}>Delete</Button>
          
          </td>
        </tr>

       ))

      }
      </tbody>
    </Table>
    </div>
  )
}

// import react, { useState, useEffect } from 'react';
// import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
// import { getUsers, deleteUser } from '../Service/api';
// import { Link } from 'react-router-dom';

// const StyledTable = styled(Table)`
//     width: 90%;
//     margin: 50px 0 0 50px;
// `;

// const THead = styled(TableRow)`
//     & > th {
//         font-size: 20px;
//         background: #000000;
//         color: #FFFFFF;
//     }
// `;

// const TRow = styled(TableRow)`
//     & > td{
//         font-size: 18px
//     }
// `;

// const AllUsers = () => {
//     const [users, setUsers] = useState([]);
    
//     useEffect(() => {
//         getAllUsers();
//     }, []);

//     const deleteUserData = async (id) => {
//         await deleteUser(id);
//         getAllUsers();
//     }

//     const getAllUsers = async () => {
//         let response = await getUsers();
//         setUsers(response.data);
//     }

//     return (
//         <StyledTable>
//             <TableHead>
//                 <THead>
//                     <TableCell>Id</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Username</TableCell>
//                     <TableCell>Email</TableCell>
//                     <TableCell>Phone</TableCell>
//                     <TableCell></TableCell>
//                 </THead>
//             </TableHead>
//             <TableBody>
//                 {users.map((user) => (
//                     <TRow key={user.id}>
//                         <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
//                         <TableCell>{user.name}</TableCell>
//                         <TableCell>{user.username}</TableCell>
//                         <TableCell>{user.email}</TableCell>
//                         <TableCell>{user.phone}</TableCell>
//                         <TableCell>
//                             {/* <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
//                             {/* <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> change it to user.id to use JSON Server */} */}
//                         </TableCell>
//                     </TRow>
//                 ))}
//             </TableBody>
//         </StyledTable>
//     )
// }

// export default AllUsers;