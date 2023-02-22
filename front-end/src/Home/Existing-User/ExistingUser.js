import { useState, } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './UserOperations/Redux/action';

const ExistingUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);


    const [accountNumber, setAccountNumber] = useState('')
    const [user, setUser] = useState([])


    const submitHandler = (e) => {
        e.preventDefault();
        const user = data.find(u => u.accountnumber === Number(accountNumber))
        console.log(user);
        setUser(user);
        if (user) {
            document.getElementsByClassName('formbtn')[0].style.display = 'none';
            document.querySelector('.form').style.display = 'none';
            document.getElementsByClassName('accbtn')[0].style.display = 'block';
            document.querySelector('.head').innerHTML = "Hello " + user.name;

        }
        else {
            alert("No user found")

        }

    }



    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);


    return (
        <>
            <center>
                <Form onSubmit={submitHandler} style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='head' >Enter Your Account Number</Form.Label>
                        <Form.Control className='form' type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter Account Number" />
                    </Form.Group>
                    <Button className='formbtn' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <br />

                <Link to={`/user-interface/${user._id}`}><Button className='accbtn' style={{ display: 'none' }} >Go to Your Account</Button></Link>
            </center>
        </>
    )
}


export default ExistingUser;



































