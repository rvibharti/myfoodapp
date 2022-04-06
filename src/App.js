import { Routes, Route } from 'react-router-dom';
import Logout from './Component/Logout';
import NavBar from './Component/Navbar';
import Login from './Component/Login';
import Menu from './Component/Menu';
import Home from './Component/Home';
import Orders from './Component/Orders';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Menu' element={<Menu />}></Route>
        <Route path='Logout' element={<Logout />}></Route>
        <Route path='LogIn' element={<Login />}></Route>
        <Route path='Orders' element={<Orders />}></Route>

      </Routes >
    </>
  );
}

export default App;
