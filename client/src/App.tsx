import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPage from "./com.example/pages/UserPage";
import UserListPage from "./com.example/pages/UserListPage";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserListPage/>}> </Route>
            <Route path="/user/:id" element={<UserPage/>}> </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
