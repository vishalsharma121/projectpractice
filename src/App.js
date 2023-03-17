import './App.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './component/404/Page404';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Page404 />}/> */}
        {/* <Route path='/*' element={<Navigate to='/' />}/> */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
