import React from "react";
import BookMarkData from "../components/BookMarkData";
const Home = (props) => {
  console.log(props.bookClicked);
  return (
    <React.Fragment>
      {props.bookClicked ? (
        <BookMarkData />
      ) : (
        <div className="text-center" style={{ marginTop: "20em" }}>
          <h3>Welcome To The Hacker News</h3>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
