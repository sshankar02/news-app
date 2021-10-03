import NewsCollection from "../../molecules/NewsCollection";
import './NewsHome.css'

const NewsHome = props =>{
    const {rows=[]} = props;
    return <div className="news-home"><div className="news-collection-container"><NewsCollection rows={rows}/></div></div>
}

export default NewsHome;