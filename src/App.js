import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>
        <Route path='/signup' element={<Register/>} exact={true}/>
        <Route path='/signin' element={<Login/>} exact={true}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
