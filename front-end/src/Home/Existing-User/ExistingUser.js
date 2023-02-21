import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

const ExistingUser = () => {
    const [accountNumber, setAccountNumber] = useState('')
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        const fetchUsers = async()=>{
            const {data} = await axios.get("/api/users")
            setUsers(data)
        } 

        fetchUsers();
    },[])

    const submitHandler = (e) => {
        e.preventDefault();

        

        // const user = users.find(u=>u.accNo === Number(accountNumber))
        // if (user){
        //     document.getElementsByClassName('formbtn')[0].style.display = 'none';
        //     document.getElementsByClassName('accbtn')[0].style.display = 'block';
        // }
        // else{alert("No user found");}
        
    } 
    return (
        <>
            <center>
                <Form onSubmit={submitHandler} style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your Account Number</Form.Label>
                        <Form.Control type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter Account Number" />
                    </Form.Group>
                    <Button className='formbtn' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br/>
                <Link to={`/user-interface/${accountNumber}`}><Button className='accbtn' style={{display:'none'}}>Got to Account</Button></Link>
            </center>
        </>
    )
}

export default ExistingUser