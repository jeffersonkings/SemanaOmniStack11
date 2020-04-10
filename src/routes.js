import React from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Logon from './pages/Logon';
import Profile from './pages/Profle';
import Newincidents from './pages/Newincidents ';  

export default function Routes()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/Register"  component={Register}/>
                <Route path="/Profile"  component={Profile}/>
                <Route path="/incidents/New"  component={Newincidents}/> 
            </Switch>
        </BrowserRouter>
    );
}