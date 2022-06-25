import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Employee from './pages/Employee';
import Navbar from './component/Navbar';

export const EmployeeContext = createContext()

function App() {
  const [contextData, setContextData] = useState([{
    id: "1",
    firstName: "Azharuddin",
    lastName: "Khan",
    dob: "16/06/1994",
    designation: "Software Engineer",
    profileLink: "https://www.gravatar.com/avatar/407d16042c7dfa66d36fac5ca7a630b7?s=64&d=identicon&r=PG",
    experience: 5
  }])

  return (
    <>
      <EmployeeContext.Provider value={{ contextData, setContextData }}>
        <Router>
          <Navbar />
          <div className="container">

            <div className="col-md-12">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/edit-employee/:id" exact component={Employee} />
                <Route path="/add-employee/" exact component={Employee} />
              </Switch>
            </div>

          </div>
        </Router>
      </EmployeeContext.Provider>
    </>
  );
}

export default App;
