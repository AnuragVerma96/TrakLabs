
import EnhancedTable from "../Components/Table"
import React, { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"


const Employee = () =>{
    useEffect(() => {
        axios.get('http://localhost:8080/Hello')
  .then(function (response) {
    // handle success
    alert("Server is running")
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    alert("Server is not running, please run 'npm run dev' in the TrakLabs Server Folder")
    console.log(error);
  });        
    });
    
    return(
        <>
        <EnhancedTable/>
        <Link to='/addEmployee'><button style={{margin:'10px', fontFamily:'sans-serif', padding:'0',cursor:'pointer'}}>Add Employee</button></Link>
        </>
    )
}

export default Employee;
