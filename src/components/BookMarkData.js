import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import NoData from "./NoData";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const NewsData = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const isLocalData = JSON.parse(localStorage.getItem("bookmarks"));
    if (isLocalData) {
      setData(isLocalData);
    } else {
      setData([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(data));
  }, [data]);

  const removeFromBookHandler = (news) => {
    const newdata = data.filter((entry) => entry.objectID != news.objectID);
    setData(newdata);
    Swal.fire("Done", "News Deleted From Bookmark!", "success");
  };

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTop: "5em" }}>
        {data.length > 0 ? (
          data.map((news) => (
            <div
              key={news.objectID}
              className="px-5 py-3 my-1 border-bottom d-flex justify-content-between"
            >
              <div className="w-75">
                <p className="mb-0">
                  <b>{news.title}</b>{" "}
                  <a href={news.url} target="_blank">
                    ({news.url})
                  </a>
                </p>
                <p className="mb-0" style={{ fontSize: 12 }}>
                  {news.points} points | {news.author} | posted at{" "}
                  <Moment format="DD/MM/YYYY">{news.created_at}</Moment> |{" "}
                  {news.num_comments} comments
                </p>
              </div>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => removeFromBookHandler(news)}
                >
                  Remove From Bookmark
                </button>
              </div>
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </React.Fragment>
  );
};

export default NewsData;
