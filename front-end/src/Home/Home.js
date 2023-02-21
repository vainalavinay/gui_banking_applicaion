import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <center>
    <h1>Home</h1>
    <Link to='/existing-user'>
    <Button variant="primary" size="lg">Existing User</Button>
    </Link>
    <br/>
    <br/>
    <Link to='/new-user'>
    <Button variant="primary" size="lg">New User</Button>
    </Link>
    </center>

    </>
  )
}

export default Home