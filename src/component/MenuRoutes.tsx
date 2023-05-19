import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default class MenuRoutes extends React.Component {
  render() {
    return ( 
        <BrowserRouter>
            <Routes>
              
                <Route path="/" element={ <Home></Home> }>
                </Route>

                <Route path="/about" element={ <h1>ABOUT</h1> }>
                </Route>

                <Route path="/commands" element={ <h1>COMMANDS</h1> }>
                </Route>

                <Route path="/contact" element={ <h1>CONTACT</h1> }>
                </Route>

            </Routes>
        </BrowserRouter>
    );
  }
}