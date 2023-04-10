import './App.css';
import React from 'react';
// import Register from './component/register/Register';
// import Footer from './component/footer/Footer';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './component/login/Login';
// import RenderMethoud from './component/practicecomps/RenderMethoud';
// import Constructor from './component/practicecomps/Constructor';
// import Login from './component/practicecomps/Login';
// import Ifcondition from './component/practicecomps/Ifcondition';
// import Checkbox from './component/practicecomps/Checkbox';
// import Hideshow from './component/practicecomps/Hideshow';
// import React, {useState} from 'react'
// import PropFunc from './component/practicecomps/PropsinFunc';
// import ClassComp from './component/ClassComponent';
// import Login from './component/login/Login';
// import Usestate from './component/Usestate'
// import FucProp from '../src/component/practicecomps/FunctionProps'.
// import Register from '../src/component/practicecomps/Check';
//  import Check from '../src/component/practicecomps/Check';
// hooks
// import Ustate from './component/hooks/Ustate';
// import Ueffect from './component/hooks/Ueffect';
// import UeffectCon from './component/hooks/UeffectCondition';
import { useState } from 'react';
import UeffectConcopy from './component/hooks/UeffectCondition copy';
function App() {
  const [data, setData] = useState(10);
  const[count, setCount] = useState(100);
  // const [name,setName]=React.useState('Vishal')
  // function getData(){
  //   alert('data come from other place')
  // }
  // const [name, setName] = useState ('Vishal')
  return (
    <div>

       {/* hooks */}
      {/* <Ustate></Ustate> */}
      {/* <Ueffect></Ueffect> */}
      {/* <UeffectCon></UeffectCon> */}
      <UeffectConcopy count={count} data={data} />
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
      <Footer /> */}
      {/* <Usestate></Usestate> */}
      {/* <ClassComp></ClassComp> */}
      {/* <PropFunc name={name} email={'vishal@gmail.com'} other={{address:'delhi',mobile:'000'}}></PropFunc>
      <button onClick={()=>{setName('sidhu')}}>Click Me</button> */}
    {/* <PropFunc></PropFunc> */}
      {/* <Hideshow></Hideshow> */}
      {/* <Checkbox></Checkbox> */}
      {/* <Check></Check> */}
      {/* <Ifcondition></Ifcondition> */}
      {/* <Login></Login> */}
      {/* <FucProp data={getData} /> */}
      {/* <Constructor></Constructor> */}
      {/* <RenderMethoud name={name}></RenderMethoud>
      <button onClick={()=>setName('Sharma')}>Update Name</button> */}
    </div>
  );
}

export default App;
