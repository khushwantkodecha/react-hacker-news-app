import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Swal from "sweetalert2";

const NewsData = (props) => {
  const data = props.data;
  const dataLength = props.data.length;

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const isLocalData = localStorage.getItem("bookmarks");
    if (isLocalData) {
      setLocalData(JSON.parse(isLocalData));
    } else {
      setLocalData([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(localData));
  }, [localData]);

  const addToBookHandler = (news) => {
    setLocalData([...localData, news]);
    Swal.fire("Done", "News Added To Bookmark!", "success");
  };

  return (
    <React.Fragment>
      {dataLength > 0
        ? data.map((news) => (
            <div
              key={news.objectID}
              className="px-5 py-3 my-1 border-bottom d-flex justify-content-between"
            >
              <div className="">
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
            </div>
          ))
        : null}
    </React.Fragment>
  );
};

export default NewsData;
