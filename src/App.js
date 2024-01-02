
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import AddUser from './pages/AddUser';
import Pagenotfound from './pages/Pagenotfound';
import Users from './component/Users';
import UpdateUser from './pages/UpdateUser';
import Productdetail from './pages/Productdetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route index element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/update/:id' element={<UpdateUser/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
            <Route path='/productdetail' element={<Productdetail/>}/>
            
         </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
