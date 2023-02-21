import {React, useState} from 'react'
import { useParams } from 'react-router';
import {Form, Button} from'react-bootstrap';
import users from '../users';

const ChangePin = () => {
    const { id } = useParams();
    const accountHolder = users.find(user => user.accNo === Number(id));
    const [pin, setPin] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        accountHolder.password = Number(pin);
        console.log(accountHolder.password);
        alert('PIN changed successfully');
    }

    return (
        <>
            <center>
                <Form onSubmit={submitHandler} style={{ width: '18rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Your new PIN to change.</Form.Label>
                        <Form.Control type="text" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter PIN" />
                    </Form.Group>
                    <Button className='formbtn' variant="primary" type="submit">
                        Change PIN
                    </Button>
                </Form>
            </center>
        </>
    )
}

export default ChangePin