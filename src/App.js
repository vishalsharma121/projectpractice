import './App.css';
import ClassComp from './component/ClassComponent';
// import Login from './component/login/Login';
// import Register from './component/register/Register';
// import Footer from './component/footer/Footer';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Usestate from './component/Usestate'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter> */}
      {/* <Footer /> */}
      {/* <Usestate></Usestate> */}
      <ClassComp></ClassComp>
    </div>
  );
}

export default App;
