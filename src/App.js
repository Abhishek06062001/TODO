import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import{ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <NavBar/>
    <Switch>
    <Route exact path='/signin' component={SignIn}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/' component={Dashboard}/>
    </Switch>
    
    </BrowserRouter>
      
    </>
  );
}

export default App;
