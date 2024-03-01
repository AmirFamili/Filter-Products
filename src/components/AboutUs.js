import React, { Component } from "react";
import Coding from "../images/coding.webp";
import Logo from "../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default class AboutUs extends Component {
  render() {
    return (
      <section id="about-me" className="p-5">
        <h2
          className=" text-2xl m-5 pb-1 
        pl-3  "
        >
          About ME
        </h2>
        <div className="border"></div>
        <div className="flex justify-center items-center bg-blue-900 rounded-lg p-10 shadow-xl  mt-10">
          <div
            className="w-1/2 max-md:w-full mt-5 p-5  text-white"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <a href=" https://www.amirfamili.com">
              <h3 className=" text-xl pb-2 hover:text-blue-400 ">Amir Famili</h3>
            </a>
            <h5 className="">
              I'm a skilled Front-End developer with experience in TypeScript,
              JavaScript, and expertise in libraries like jQuery, React, and
              frameworks like Next.js. I'm a quick learner and collaborate
              closely with clients to create efficient, scalable, and
              user-friendly solutions that solve real-world problems. Let's work
              together to bring your ideas to life!
            </h5>
            <a href="https://github.com/AmirFamili">
              <i className="fa-brands fa-github p-3 text-2xl  hover:text-blue-500 hover:shadow-2xl "></i>
            </a>
            <a href=" https://www.linkedin.com/in/amir-famili/">
              <i className="fa-brands fa-linkedin p-3 text-2xl hover:text-blue-500 hover:shadow-2xl "></i>
            </a>
          </div>
          <img
            className=" w-1/2 max-md:hidden rounded-lg shadow-lg m-5"
            src={Coding}
            alt="Coding"
          />
        </div>
      </section>
    );
  }
}
