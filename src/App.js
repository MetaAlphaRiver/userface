import * as React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Welcome from './components/home/Welcome';
import Home from './components/home';
import Login from '././components/home/Login';
import Register from '././components/home/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


