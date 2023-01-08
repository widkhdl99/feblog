import logo from './logo.svg';
import './App.css';
import { Button, InputGroup, Form, Container } from "react-bootstrap"
import {Routes, Route, useNavigate,Outlet } from 'react-router-dom'
import Home from "./component/Home.js"
import TopNav from './component/layout/TopNav';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/main' element={ <TopNav/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
