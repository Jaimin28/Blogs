import React from "react";
import Header from "./components/Header";
import BlogContent from "./components/BlogContent";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";

function App() {
  const { blogfetchdata } = useContext(AppContext);

  useEffect(() => {
    blogfetchdata();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-x-1 justify-center items-center ">
      <Header />
      <BlogContent />
      <Pagination />
    </div>
  );
}

export default App;
