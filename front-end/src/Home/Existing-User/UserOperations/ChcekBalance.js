import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './Redux/action';

const ChcekBalance = () => {
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

    return (
    <>
        <center>
        <h1>Hello {userData.name}</h1>
        <h1>Your Account Balance is ₹ {userData.balance} /-</h1>
        </center>
    </>
  )
}

export default ChcekBalance