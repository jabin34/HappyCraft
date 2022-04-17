

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Services from './components/Service/Services';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/checkout' element={<RequiredAuth><Checkout/></RequiredAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
