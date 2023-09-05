import './App.css';
import { Home, Forum, OurFavs } from './pages';
import Nav from './Nav';
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
return (
    <div>  
    <Routes>
        <Route path ="/" element = {<Nav/>}>

        <Route index element={<Home />}/>
        <Route path="/ourfavs" element={<OurFavs />}/>
        <Route path="/forum" element={<Forum />}/>





        </Route>
    </Routes>
    </div>  


)
}

export default App