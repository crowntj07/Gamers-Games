import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react router-dom';
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;