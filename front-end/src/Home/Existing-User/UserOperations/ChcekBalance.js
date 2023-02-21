import React from 'react'
import users from '../users'
import { useParams } from 'react-router'

const ChcekBalance = () => {
    const {id} = useParams();
    const accountHolder = users.find(user => user.accNo === Number(id));
  return (
    <>
        <center>
        <h1>Hello {accountHolder.name}</h1>
        <h1>Your Account Balance is {accountHolder.balance}</h1>
        </center>
    </>
  )
}

export default ChcekBalance