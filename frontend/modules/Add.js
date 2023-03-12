import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Add() {

  let navigate=useNavigate();

 const [data,setData]=useState({
  name:"",city:"",pincode:""})

  const{name,city,pincode}=data

const addform=(e)=>{
  setData({...data,[e.target.name]:e.target.value});
}

const onSubmit=async(e)=>{
  e.preventDefault();
  await axios.post(`http://localhost:8080/add`,data);
  console.log("data added")
 
  navigate("/")
}


  return (
    <>
    <div className='container' >
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h4>Add Customer</h4>
          <hr/>
      
    <Form onSubmit={(e)=>onSubmit(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"
        value={name} name="name"
        onChange={(e)=>addform(e)} />
       </Form.Group>
      
       <Form.Group className="mb-3">
        <Form.Label>Enter city</Form.Label>
        <Form.Control type="text" placeholder="Enter city"
        value={city} name="city"
        onChange={(e)=>addform(e)} />
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>Enter pincode</Form.Label>
        <Form.Control type="text" placeholder="Enter pincode" 
        value={pincode} name="pincode"
        onChange={(e)=>addform(e)} />
       </Form.Group>

      
      <Button variant="secondary" type="submit">
        Add
      </Button>
      <Button variant="danger" type="submit">
        cancel
      </Button>
    </Form>
    
    </div>
    </div>
    </div>
    </>
  );
}

export default Add;