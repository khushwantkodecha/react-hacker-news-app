import React, { useContext } from "react";
import { NewsContext } from "../contex/NewsContext";
import Loading from "../components/Loader";
import NewsData from "../components/NewsData";
import Navbar from "./Navbar";

const NewsList = () => {
  const { data, loading } = useContext(NewsContext);
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTop: "5em" }}>
        {loading ? <Loading /> : <NewsData data={data} />}
      </div>
    </React.Fragment>
  );
};

export default NewsList;
