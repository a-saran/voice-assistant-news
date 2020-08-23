import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

import NewsCards from "./components/newsCards/NewsCards";

const alanKey =
  "7d69029ca4ed0a8d829a922d09efa7472e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setActiveArticle(-1);
          setNewsArticles(articles);
        } else if (command === "highlight") {
          setActiveArticle(prevArticle => prevArticle + 1);
        }
      }
    });
  }, []);

  return (
    <div className="app">
      <center>
        <h1>Alan AI news app</h1>
      </center>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
