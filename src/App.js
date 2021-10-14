import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateLogs from './Components/CreateLogs/CreateLogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Page404 from './Components/Page404/Page404';
import  ProtectedRoute  from './Components/ProtectedRoute/ProtectedRoute';
import Signup from './Components/Signup/Signup';

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route path="/signup" component={Signup} />
       <ProtectedRoute path="/dashoboard" component={Dashboard}/>
       <Route path="/createlog" component={CreateLogs}/>
       <Route path="*" component={Page404} />    
     </Switch>
   </Router>
  );
}

export default App;
