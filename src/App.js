import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Service from './components/Pages/Service/Service';
import Contact from './components/Pages/Contact/Contact';
import NavBar from './NavBar';
import Footer from './components/Pages/Footer/Footer';
import Login from './components/Pages/Login/Login';
import Registration from './components/Pages/Registration/Registration';

function App() {
  return (
    <>
    <NavBar></NavBar>
    {/* <Home></Home> */}
    {/* <About></About> */}
    {/* <Service></Service> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Registration></Registration>}></Route>
        <Route path="*"element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
