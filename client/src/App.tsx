import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPage from "./com.example/pages/UserPage";
import UserListPage from "./com.example/pages/UserListPage";
import UserEditPage from "./com.example/pages/UserEditPage";
import UserAddPage from "./com.example/pages/UserAddPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserListPage/>}> </Route>
                    <Route path="/user/:id" element={<UserPage/>}> </Route>
                    <Route path="/edit/:id" element={<UserEditPage/>}> </Route>
                    <Route path="/add" element={<UserAddPage/>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
