import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: "",
      searchResult: [],
      genres: [],
      filterGenre: [],
    };
  }
  componentDidMount() {
    axios.get("movies.json").then((res) => {
      this.setState({ movies: res.data, searchResult: res.data });

      let genres = [];

      let boolean = false;
      res.data.map((movie) => {
        for (let y = 0; y < movie.Genre.split(",").length; y++) {
          for (let i = 0; i <= genres.length; i++) {
            if (genres[i] === movie.Genre.split(",")[y].trim()) {
              boolean = true;
            }
          }
          if (!boolean) {
            genres.push(movie.Genre.split(",")[y].trim());
          } else {
            boolean = false;
          }
        }
      });

      this.setState({ genres: genres });
    });
  }

  handlerSearch = (e) => {
    this.setState({ search: e.target.value });
    const resultArray = this.state.movies.filter((movie) =>
      movie.Title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({ searchResult: resultArray });
  };

  handlerGenres = (e) => {
    const filterGenre = this.state.filterGenre;

    for (let i = 0; i <= this.state.filterGenre.length; i++) {
      if (this.state.filterGenre.length > 0) {
        if (this.state.filterGenre[i] === e.target.id) {
          break;
        } else {
          if (i === this.state.filterGenre.length) {
            filterGenre.push(e.target.id.trim());
            this.setState({ filterGenre: filterGenre });
            break;
          }
        }
      } else {
        filterGenre.push(e.target.id.trim());
        this.setState({ filterGenre: filterGenre });
        break;
      }
    }

    console.log(this.state.filterGenre);

    const resultArray = this.state.movies.filter((movie) =>
      this.handlerCheckGenre(movie)
    );

    this.setState({ searchResult: resultArray });
  };

  handlerCheckGenre = (movie) => {
    const genres = movie.Genre.split(",");
    for (let i = 0; i < this.state.filterGenre.length; i++) {
      for (let y = 0; y < genres.length; y++) {
        if(this.state.filterGenre[i]===genres[y]){
          return movie;
        }
      }
    }
  };

  render() {
    return (
      <div className="flex justify-around items-top   ">
        <div className="flex justify-around items-center flex-wrap w-10/12 ">
          {this.state.searchResult.map((movie) => {
            return (
              <div
                key={movie.Id}
                className="border w-72 my-5 mx-2 rounded-lg overflow-hidden text-center shadow-xl "
              >
                <img className="w-full" src={movie.Poster} alt="" />
                <h2 className="p-5 text-lg font-bold'">{movie.Title}</h2>
                <div className="flex justify-around items-center text-sm ">
                  <h4 className="">{movie.Director}</h4>
                  <h4 className="">{movie.Released.split(" ")[2]}</h4>
                </div>
                <h3 className="p-5">{movie.Genre}</h3>
              </div>
            );
          })}
        </div>
        <div className=" border shadow-sm px-3 py-2">
          <div className="p-3">
            <input
              className="border rounded-md p-1 mb-2 bg-slate-50"
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handlerSearch}
            />
            <div className="">
              {this.state.genres.map((genre) => {
                return (
                  <button
                    key={genre}
                    id={genre}
                    className="p-2  my-3 border rounded-lg shadow-lg  block text-center w-full  hover:bg-blue-600 bg-blue-800 text-white hover:scale-105 duration-200 ease-in"
                    onClick={this.handlerGenres}
                  >
                    {genre}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
