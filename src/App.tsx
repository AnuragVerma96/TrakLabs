import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Employee from './Pages/Employee';
import Department from './Pages/Department';
import Navigation from './Components/Navigation';
import AddEmp from './Components/AddEmp';
import AddDept from './Components/AddDept';

function App() {
  return (
    <>
    <div className="bgimg"></div>
        <Router>
          <Navigation/>
            <Switch>
              <Route path="/" component={Home} exact></Route>              
              <Route path="/employee" component={Employee}></Route>
              <Route path="/department" component={Department}></Route>
              <Route path="/addEmployee" component={AddEmp}></Route>
              <Route path="/addDepartment" component={AddDept}></Route>
            </Switch>
        </Router>
    </>
 
  );
}

export default App;
