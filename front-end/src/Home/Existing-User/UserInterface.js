import axios from 'axios'
import {React,useState,useEffect} from 'react'
// import users from './users'
import {useParams, Link} from 'react-router-dom';
import { Button } from 'react-bootstrap'

const UserInterface = () => {
    const {id} = useParams();    
    const [users, setUsers] = useState({});
    useEffect(()=>{
        const fetchUser = async()=>{
            const {data} = await axios.get(`/api/users/${id}`)
            setUsers(data)
            console.log(data);
        }
        fetchUser();
    },[])
    
    // const accountHolder = users.find(user => user.accNo === Number(id));
  return (
    <>
        <center>
            <h1>Hello {users.name}</h1>
            <Link to={`/user-interface/${users.accNo}/check-balance`}>
            <Button style={{width:"20%", marginRight:"10%", marginTop:"10%"}} size="lg">CHECK BALANCE</Button>
            </Link>
            <Link to={`/user-interface/${users.accNo}/withdraw`}>
            <Button style={{width:"20%", marginTop:"10%"}} size="lg">WITHDRAW</Button><br/>
            </Link>
            <Link to={`/user-interface/${users.accNo}/change-pin`}>
            <Button style={{width:"20%", marginRight:"10%", marginTop:"10%"}} size="lg">CHANGE PIN</Button>
            </Link>
            <Link to={`/user-interface/${users.accNo}/deposit`}>
            <Button style={{width:"20%", marginTop:"10%"}} size="lg">DEPOSIT</Button>
            </Link>
        </center>
    </>
  )
}

export default UserInterface