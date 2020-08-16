import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchNews = (arg) => {
    console.log("a");
    getNewsList(arg);
  };

  const getNewsList = async (query) => {
    setLoading(true);
    try {
      const res = await axios({
        url: `https://hn.algolia.com/api/v1/search?query=${query}`,
        method: "GET",
      });
      setData(res.data.hits);
      setLoading(false);
    } catch (err) {
      console.log("Error Occured", err);
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        searchNews,
        data,
        loading,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
