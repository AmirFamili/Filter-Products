import React, { Component } from "react";
import Img1 from "../images/1.jpeg";
import Img2 from "../images/2.avif";
import Img3 from "../images/3.jpeg";
import Img4 from "../images/4.jpeg";
import Img5 from "../images/5.jpeg";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { Img: 1 };
  }
  nextImgHandler = () => {
    if (this.state.Img === 5) {
        this.setState(() => ({
            Img: 1,
          }));
    } else {
      this.setState((prevState) => ({
        Img: prevState.Img + 1,
      }));
    }
  };

  beforeImgHandler = () => {
    if (this.state.Img === 1) {
        this.setState(() => ({
            Img: 5,
          }));
    } else {
      this.setState((prevState) => ({
        Img: prevState.Img - 1,
      }));
    }
  };
  render() {
    return (
      <section className=" ">
        <div className="relative w-5/6 mt-10 mx-auto shadow-lg">
          <img 
            src={Img1}
            alt="natural "
            className={
              this.state.Img === 1
                ? "block w-full absolute rounded-lg"
                : "w-full absolute rounded-lg hidden"
            }
          />
          <img 
            src={Img2}
            alt="natural "
            className={
              this.state.Img === 2
                ? "block w-full absolute rounded-lg"
                : "w-full absolute rounded-lg hidden"
            }
          />
          <img 
            src={Img3}
            alt="natural "
            className={
              this.state.Img === 3
                ? "block w-full absolute rounded-lg"
                : "w-full absolute rounded-lg hidden"
            }
          />
          <img 
            src={Img4}
            alt="natural "
            className={
              this.state.Img === 4
                ? "block w-full absolute rounded-lg"
                : "w-full absolute rounded-lg hidden"
            }
          />
          <img 
            src={Img5}
            alt="natural "
            className={
              this.state.Img === 5
                ? "block w-full absolute rounded-lg"
                : "w-full absolute rounded-lg hidden"
            }
          />
          <div className="slideShow-btn z-20 absolute  w-full flex justify-between items-center  text-center h-5 ">
            <button className="" onClick={this.beforeImgHandler}>
              <i className="fa-solid fa-chevron-left text-white ml-6 text-xl hover:text-2xl ease-in-out duration-300"></i>
            </button>
            <button className="" onClick={this.nextImgHandler}>
              <i className="fa-solid fa-chevron-right text-white text-xl  mr-6 hover:text-2xl ease-in-out duration-300"></i>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
