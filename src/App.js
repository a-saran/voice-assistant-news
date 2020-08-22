import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

import NewsCards from "./components/newsCards/NewsCards";

const alanKey =
  "7d69029ca4ed0a8d829a922d09efa7472e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      }
    });
  }, []);

  return (
    <div className="app">
      <h1>Alan AI news app</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
