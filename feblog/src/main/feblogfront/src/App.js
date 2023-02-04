import logo from './logo.svg';
import './App.css';
import { Button, InputGroup, Form, Container } from "react-bootstrap"
import {Routes, Route, useNavigate,Outlet } from 'react-router-dom'
import Home from "./component/Home.js"
import TopNav from './component/layout/TopNav';
import Main from "./component/Main"
import Join from './component/member/Join';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/main' element={ <Main/> }></Route>
        <Route path='/member/join' element={<Join/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
