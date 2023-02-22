import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {Form, Button} from'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/action';
import axios from 'axios'


const Deposit = () => {
    const [deposit, setDeposit] = useState(0);
    const {id} = useParams();
    const  [userData, setUserData] = useState([])

    const dispatch = useDispatch()
    const data = useSelector((state)=>state.data.data)

    const user = data.find(u=>u._id === id)
    
    useEffect(()=>{
        try {
            if(user){
                setUserData(user)
                localStorage.setItem('user', JSON.stringify(user))
                console.log(userData);
                
            }
        } catch (error) {
            console.log(error);
        }
    },[])

    useEffect(()=>{
        try {
            const storedData = localStorage.getItem('user')
            if (storedData){
                setUserData(JSON.parse(storedData))
                console.log(userData);

            }
        } catch (error) {
            
        }
    },[])

    useEffect(()=>{
        dispatch(getData())
    },[dispatch])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/user-interface/${user._id}/deposit`,{deposit:deposit},{
            Headers: { 'Accept': 'application/json'},
        })
        .then(response=>console.log(response))
        .catch(err => console.error(err))
        alert('Cash depostited successfully.!')
    }

    return (
        <>
            <center>
                <Form onSubmit={submitHandler} style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your Amount to Deposit.</Form.Label>
                        <Form.Control type="text" value={deposit} onChange={(e) => setDeposit(e.target.value)} placeholder="Enter Amount" />
                    </Form.Group>
                    <Button className='formbtn' variant="primary" type="submit">
                        Deposit
                    </Button>
                </Form>
            </center>
        </>
    )
}

export default Deposit