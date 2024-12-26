import { useState } from "react";
// import { Children } from "react";
import { createContext } from "react";
import { baseUrl } from "../components/baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [color,setColor] = useState("white");

  async function blogfetchdata(page = 1) {
    setLoading(true);
    let URL = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(URL);
      const data = await result.json();
      console.log(data);

      setPage(data?.page);
      setPosts(data?.posts);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.log("error");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  function handlerPageChange(page) {
    setPage(page);
    blogfetchdata(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    handlerPageChange,
    blogfetchdata,
    color,
    setColor
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export default AppContextProvider;
