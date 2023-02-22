import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './UserOperations/Redux/action';

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const UserInterface = () => {

    const [userData, setUserData] = useState([]);
    const { id } = useParams();
    
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data); 
    
    
    
    
    useEffect(() => {
        try {
          const user = data.find(u => u._id === id);
          setUserData(user);
          localStorage.setItem('userData', JSON.stringify(user));
        } catch (error) {
          console.error(error);
        }
      }, [id, data]);
    
      useEffect(() => {
        try {
          const storedData = localStorage.getItem('userData');
          if (storedData) {
            const user = JSON.parse(storedData);
            setUserData(user);
          }
        } 
        catch (error) {
        //   console.log('Error parsing JSON:', error.message);
        }
      }, []);
    
      


  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
        <center>
            <h1>Hello {userData && userData.name}</h1>
            <Link to={`/user-interface/${userData && userData._id}/check-balance`}>
                <Button style={{ width: "20%", marginRight: "10%", marginTop: "10%" }} size="lg">CHECK BALANCE</Button>
            </Link>
            <Link to={`/user-interface/${userData && userData._id}/withdraw`}>
                <Button style={{ width: "20%", marginTop: "10%" }} size="lg">WITHDRAW</Button><br />
            </Link>
            <Link to={`/user-interface/${userData && userData._id}/change-pin`}>
                <Button style={{ width: "20%", marginRight: "10%", marginTop: "10%" }} size="lg">CHANGE PIN</Button>
            </Link>
            <Link to={`/user-interface/${userData && userData._id}/deposit`}>
                <Button style={{ width: "20%", marginTop: "10%" }} size="lg">DEPOSIT</Button>
            </Link>

        </center>
    </>
)
}
export default UserInterface;
