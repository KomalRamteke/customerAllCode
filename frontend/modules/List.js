import Table from 'react-bootstrap/Table';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom'


function List() {
 const [data,setData]=useState([]);
 const {id}=useParams();

 useEffect(()=>{
  console.log("coding with komal into customer database");
  loadData();
},[]);

const loadData=async()=>{
const result=await axios.get(`http://localhost:8080/all`);
setData(result.data);
};

const deleteData=async(id)=>{
  await axios.delete(`http://localhost:8080/dlt/${id}`);
  loadData()
}



  return (
    <>
    <div className='text-center'>
      <h1>List of Customer</h1>
    </div>
      <div className="container">
        <div className='py-4'>
      
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>City</th>
          <th>Pincode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((u,index)=>(
            <tr>
              <th scope="row" key={index}>{index+1}</th>
              <td>{u.name}</td>
              <td>{u.city}</td>
              <td>{u.pincode}</td>
              <td>
                <Link className='btn btn-primary mx-2' to={`/update/${u.id}`} type="submit">update</Link>
                <Link className='btn btn-success mx-2' to={`/one/${u.id}`} type="submit">View</Link>
                <Link className='btn btn-danger mx-2' onClick={()=>deleteData(u.id)} type="reset">Delete</Link>
              
              </td>
            </tr>
          ))
        }
       
      </tbody>
    </Table>

    </div>
    </div>
    </>
  );
}

export default List;