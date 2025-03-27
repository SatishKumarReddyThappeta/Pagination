import React from "react";

const Pagination = ({currentPage, goToLeft, goToRight, handleClick, numberofPages}) => {
  return (
    <div className="mt-8 absolute bottom-12">
      <button
        disabled={currentPage == 0}
        className={` ${
          currentPage == 0 ?  "bg-[#ccc] cursor-not-allowed" : 'cursor-pointer'
        } px-2 border border-black cursor-pointer py-1 mr-1`}
        onClick={goToLeft}
      >
        &lt;&lt;
      </button>
      {Array.from({ length: numberofPages }).map((_, index) => {
        return (
          <span
            key={index}
            className={` ${currentPage == index ? "bg-black text-white" : ""}
           px-2 border border-black cursor-pointer py-2 mr-1`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </span>
        );
      })}
      <button
        disabled={currentPage == numberofPages - 1}
        className={` ${
          currentPage == numberofPages - 1 ? "bg-[#ccc] cursor-not-allowed" : 'cursor-pointer'
        } px-2 border border-black cursor-pointer py-1`}
        onClick={goToRight}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
