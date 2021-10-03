import { useState, useEffect } from "react";
import './App.css';
// Components
import NewsCollection from './molecules/NewsCollection';

// Services
import GetTopHeadlines from "./services/GetTopHeadlines";

function App() {

  const [newsItems, setNewsItems] = useState([]);

  useEffect(()=>{
    GetTopHeadlines('mock')
      .then(response => setNewsItems(response.data.articles));
  },[])

  return (
    <div className="App">
      <h1>News App</h1>
      {<NewsCollection data={newsItems}/>}
    </div>
  );
}

export default App;
