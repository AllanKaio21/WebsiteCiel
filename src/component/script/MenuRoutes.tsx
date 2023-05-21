import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Commands from "./Commands";

export default class MenuRoutes extends React.Component {
  render() {
    return ( 
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={ <Home></Home> }>
                </Route>

                <Route path="/about" element={ <About></About> }>
                </Route>

                <Route path="/commands" element={ <Commands></Commands> }>
                </Route>

            </Routes>
        </BrowserRouter>
    );
  }
}