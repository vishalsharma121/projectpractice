import './App.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
      <Footer />     
    </div>
  );
}

export default App;
