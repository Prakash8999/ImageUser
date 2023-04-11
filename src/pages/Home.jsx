import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import { AiOutlineSearch } from "react-icons/ai";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../FbConfig";
import { data } from "autoprefixer";
import Bg from "../assets/Bg.png";

const Home = () => {
  const [images, getImages] = useState([]);
  const [backendImage, setBackendImage] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredImage, setFilteredImage] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Images"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((document) => {
        temp.push({ ...document.data(), imageId: document.id });
        // console.log( document.data());
      });
      getImages(temp);
      setBackendImage(temp);

      // console.log(temp);
    });
  }, []);

  return (
    <>
      <div
        className=" h-full bg-cover bg-fixed  bg-opacity-75"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >


        <div className="bg-black bg-opacity-80">

        
        <Navbar />
        <div className="w-full h-[30vh] md:h-[50vh] flex justify-center focus:justify-start items-center object-scale-down bg-no-repeat gap-2 ">
          <input
            type="search "
            placeholder="search here "
            className="w-[70%]  h-[12%] md:h-[12%] rounded-xl md:rounded-2xl outline-none   duration-300  px-1 placeholder:text-neutral-600 placeholder:opacity-100 bg-white bg-opacity-20 text-white border-opacity-10"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="  bg-white bg-opacity-20 px-4  focus:outline-blue-600 w-fit  h-[12%] md:h-[12%] rounded-xl md:rounded-2xl focus:border-black ">
            <AiOutlineSearch />
          </button>
        </div>

        <div className=" grid grid-cols-3 gap-5">

          {images
            ?.filter((value) => {
              return search.toLocaleLowerCase === ""
                ? value
                : value.description.toLocaleLowerCase().includes(search) ||
                    value.tags.toLocaleLowerCase().includes(search);
            })
            .map((value, index) => {
              return (
                <div key={"image" + index}>
                  <div className="p-1 ">
                    <img src={value?.url} alt="" />
                  
                  </div>
                </div>
              );
            })}

        
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
