import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className=" mx-1 p-5 border-b-2 shadow-md text-center">
        <nav className="flex justify-around items-center">
          <Link
            className="py-2 px-4 border rounded-lg shadow-md text-gray-800 bg-gray-300  hover:bg-blue-800 hover:text-white hover:-translate-y-1 hover:scale-105 duration-200 ease-in"
            to="/"
          >
            Home
          </Link>
          <Link
            className="py-2 px-4 border rounded-lg shadow-md text-gray-800 bg-gray-300  hover:bg-blue-800 hover:text-white hover:-translate-y-1 hover:scale-105 duration-200 ease-in"
            to="/movies"
          >
            Movies
          </Link>
          <Link
            className="py-2 px-4 border rounded-lg shadow-md text-gray-800 bg-gray-300  hover:bg-blue-800 hover:text-white hover:-translate-y-1 hover:scale-105 duration-200 ease-in"
            to="/about-us"
          >
            About Us
          </Link>
        </nav>
      </header>
    );
  }
}
