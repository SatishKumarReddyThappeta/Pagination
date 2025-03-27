import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./componenets/Product";
import Pagination from "./componenets/Pagination";
const PAGE_SIZE = 10;

const App = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentpage] = useState(0)

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=200")
    const finalData = await response.json();
    setData(finalData.products)
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handleClick = (index)=>{
    setCurrentpage(index)
  }

  const goToLeft = ()=>{
      setCurrentpage((prev) => prev-1);
  }

  const goToRight = ()=>{
      setCurrentpage(prev => prev+1)
  }

  const totalProducts = data.length;
  const numberofPages = Math.ceil(totalProducts/PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return data.length == 0 ? 
  <h2>Loading...</h2>:
  <div className="flex flex-col w-screen items-center">
    <h1 className="text-xl mt-2">Pagination Using React</h1>
    <div className="flex w-5/12 flex-wrap mt-4 justify-center gap-2">
      {
        data.slice(start, end).map((p)=>{
          return <Product key={p.id} title={p.title} thumbnail={p.thumbnail}/>
        })
      }
    </div>
    <Pagination currentPage={currentPage} goToLeft={goToLeft} goToRight={goToRight} handleClick={handleClick} numberofPages={numberofPages}/>
  </div>
};

export default App;
