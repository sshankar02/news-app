import { useState, useEffect } from "react";
import './App.css';
// Components
import NewsHome from './organism/NewsHome';

// Services
import GetTopHeadlines from "./services/GetTopHeadlines";
import GetFilteresHeadlines from "./services/GetFilteresHeadlines";

function App() {

  const [newsItems, setNewsItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const filterNews = (keyword) =>{
    setLoader(true);
    GetFilteresHeadlines('default', keyword)
      .then(response=>{
          setLoader(false);
          setNewsItems(response.data.articles)
        });
  }

  useEffect(()=>{
    GetTopHeadlines()
      .then(response => {
          setLoader(false);
          setNewsItems(response.data.articles)
        });
  },[])


  return (
    <div className="App">
      <h1>News App</h1>
      { <NewsHome rows={newsItems} action={filterNews} loader={loader}/> }
    </div>
  );
}

export default App;
