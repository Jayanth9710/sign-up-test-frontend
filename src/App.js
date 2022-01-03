import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>
        <Route path='/signup' element={<Register/>} exact={true}/>
        <Route path='/signin' element={<Login/>} exact={true}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>} exact={true}/>
        <Route path='/reset-password/:userId/:token' element={<ResetPassword/>} exact={true}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
