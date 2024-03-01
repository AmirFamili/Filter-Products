import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import AboutUs from "./components/AboutUs";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div>
           <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/about-us" element={<AboutUs/>} ></Route>
        </Routes>
        </div>
       
      </div>
    );
  }
}
