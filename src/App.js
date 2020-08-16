import React from "react";
import NewsList from "./components/NewsList";
import NewsContextProvider from "./contex/NewsContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <Router>
          <Route path="/" exact component={NewsList} />
        </Router>
      </NewsContextProvider>
    </div>
  );
}

export default App;
