import { useState, useEffect } from "react";
import './App.css';
// Components
import NewsHome from './organism/NewsHome';
import NewsDetails from './organism/NewsDetails';

// Services
import GetTopHeadlines from "./services/GetTopHeadlines";

function App() {

  const [newsItems, setNewsItems] = useState([]);
  const [openedNewsItem, setOpenedNewsItem] = useState('');

  useEffect(()=>{
    GetTopHeadlines('mock')
      .then(response => setNewsItems(response.data.articles));
  },[])


  return (
    <div className="App">
      <h1>News App</h1>
      {openedNewsItem ? <NewsDetails /> : <NewsHome rows={newsItems} />}
    </div>
  );
}

export default App;
