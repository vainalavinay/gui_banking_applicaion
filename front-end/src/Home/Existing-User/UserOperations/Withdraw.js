import {React, useState} from 'react'
import { useParams } from 'react-router';
import {Form, Button} from'react-bootstrap';
import users from '../users';

const Withdraw = () => {
    const { id } = useParams();
    const accountHolder = users.find(user => user.accNo === Number(id));
    const [withdraw, setWithdraw] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        if (withdraw>0){
            if(accountHolder.balance>withdraw){
                accountHolder.balance -= Number(withdraw);
                console.log(accountHolder.balance);
            }
            else{
                alert('Insufficient Balance');
            }
        }
        else{
            alert('Enter a valid amount');
        }
    }

    return (
        <>
            <center>
                <Form onSubmit={submitHandler} style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your Amount to Withdraw.</Form.Label>
                        <Form.Control type="text" value={withdraw} onChange={(e) => setWithdraw(e.target.value)} placeholder="Enter Amount" />
                    </Form.Group>
                    <Button className='formbtn' variant="primary" type="submit">
                    Withdraw
                    </Button>
                </Form>
            </center>
        </>
    )
}

export default Withdraw