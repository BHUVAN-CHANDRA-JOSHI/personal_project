import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './components/layout/NotFound'
import AddUser from './components/Users/AddUsers';
import EditUser from './components/Users/EditUsers';
import User from './components/Users/User';
function App(props) {
  return (
    <Router>
      <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
   <Route exact path="/users/add" component={AddUser}/>
   <Route exact path="/users/edit/:id" component={EditUser}/>
   <Route exact path="/users/:id" component={User}/>
   <Route component={NotFound} />
    </Switch>
      </div>
    </Router>
  );
}
export default App;
