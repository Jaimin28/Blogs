import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);
  return (
    <div className=" bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full ">
      <div className="flex items-center justify-between gap-x-3 w-11/12 max-w-2xl mx-auto">
      <div className="flex flex-row gap-2">
      {page > 1 && (
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => handlerPageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => handlerPageChange(page + 1)}>Next</button>
        )}
      </div>
        
        <p className="text-[14px] font-bold">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
