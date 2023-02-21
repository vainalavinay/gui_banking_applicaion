import {React, useState} from 'react'
import { useParams } from 'react-router';
import {Form, Button} from'react-bootstrap';
import users from '../users';

const Deposit = () => {
    const { id } = useParams();
    const accountHolder = users.find(user => user.accNo === Number(id));
    const [deposit, setDeposit] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        accountHolder.balance += Number(deposit);
        console.log(accountHolder.balance);
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