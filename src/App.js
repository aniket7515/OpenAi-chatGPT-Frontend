
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
