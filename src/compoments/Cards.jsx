import React, { useState } from "react";
import ReactStars from "react-stars";

function Cards() {

const [data, setdata] = useState([
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "5",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    name: "Jon Wick 2",
    year: "2019",
    rating: "1  ",
    img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
]);
  return (
    
      <div className="flex flex-wrap flex-row items-center justify-evenly p-6 space-x-2 ">
        {data.map((info,key) =>{
            return(

        
          <div key={key} className="card w-[300px] md:w-1/3 lg:w-1/4 lg:h-[530px] h-[430px] my-6 bg-gray-700 p-4 duration-500 hover:-mt-2">
            <img
              className="w-full h-[300px] lg:h-[400px]"
              src={info.img}
              alt=""
            />
            <div className="info cursor-pointer py-2">
              <h1 id="title" className="text-xl font-semibold text-white">
                <span className="text-blue-600">Name:</span>  {info.name}
              </h1>
              <h1 className="text-sm font-semibold text-white flex items-center space-x-2">
                <span className="text-blue-600">Rating:</span> <ReactStars size={20} half={true}edit={false} value={info.rating} />
              </h1>
              <h1 className="text-sm font-semibold text-white">
                <span className="text-blue-600">Year: </span> {info.year}
              </h1>
            </div>
          </div>
        )})}
      </div>
    
  );
}

export default Cards;
