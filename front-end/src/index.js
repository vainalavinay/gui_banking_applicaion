import store from './Home/Existing-User/UserOperations/Redux/store'
import { Provider } from 'react-redux';



import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import NewUser from './Home/New-User/NewUser';
import ExistingUser from './Home/Existing-User/ExistingUser';
import UserInterface from './Home/Existing-User/UserInterface.js';
import ChangePin from './Home/Existing-User/UserOperations/ChangePin';
import Deposit from './Home/Existing-User/UserOperations/Deposit';
import Withdraw from './Home/Existing-User/UserOperations/Withdraw';
import CheckBalance from './Home/Existing-User/UserOperations/ChcekBalance';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
   
    <Route path='/existing-user' element={<ExistingUser/>}/>

    <Route path='/new-user' element={<NewUser/>}/>
    <Route path='/user-interface/:id' element={<UserInterface/>}/>
    <Route path='/user-interface/:id/check-balance' element={<CheckBalance/>}/>
    <Route path='/user-interface/:id/withdraw' element={<Withdraw/>}/>
    <Route path='/user-interface/:id/change-pin' element={<ChangePin/>}/>
    <Route path='/user-interface/:id/deposit' element={<Deposit/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
);

