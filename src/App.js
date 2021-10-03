import { useState, useEffect } from "react";
import './App.css';
// Components
import NewsHome from './organism/NewsHome';
import Filter from './molecules/FilterWizard';

// Services
import GetTopHeadlines from "./services/GetTopHeadlines";
import GetFilteredHeadlines from "./services/GetFilteredHeadlines";

function App() {

  const [newsItems, setNewsItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const filterNews = (keyword) =>{
    setLoader(true);
    GetFilteredHeadlines('default', keyword)
      .then(response=>{
          setLoader(false);
          setNewsItems(response?.data?.articles);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
  }

  useEffect(()=>{
    GetTopHeadlines()
      .then(response => {
          setLoader(false);
          setNewsItems(response?.data?.articles)
        });
  },[])


  return (
    <div className="App">
      <div className="app-header">
        <h1>Top News Headlines</h1>
        <Filter action={filterNews} />
      </div>
      { <NewsHome rows={newsItems} loader={loader}/> }
    </div>
  );
}

export default App;
