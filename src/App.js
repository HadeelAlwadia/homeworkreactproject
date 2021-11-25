
import './App.css';
import { Route,Switch } from "react-router-dom";
import Navbar from './Components/Navber';
import React from 'react';
import HomePage from './pages/homePage';
import TalentPage from './pages/talentPages';
import AdminPage from './pages/adminPages';
import EmployerPage from './pages/employerPages';
import TalentPages from './pages/talentPages/appTalent';
import EmpolyerPages from './pages/employerPages/appEmployer';
import AdminPages from './pages/adminpages/appAdmin';

function App() {
    return (
     <div>
      <Navbar/>
      <Switch>

        <Route path='/'>
        <HomePage/>
        </Route>
        <Route path="/talent">
        <TalentPages/>
        </Route>
        <Route path="/admin">
        <AdminPages/>
        </Route>
        <Route path='/employer'>
        <EmpolyerPages/>
        </Route>
   


      </Switch>
     </div>
    







    );
}

export default App;