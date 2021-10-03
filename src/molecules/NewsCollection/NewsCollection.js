import NewsItem from '../NewsItem';
import './NewsCollection.css';

const NewsCollection = props =>{
    const {rows=[]} = props;

    const newsCollection = <div className="news-collection" data-testid="news-collection">
            { rows.length 
                ? rows.map((row,index) => <NewsItem key={`${index}-${row.title}`} row={row}/>) 
                : <p data-testid="news-collection-message">No news to show</p> 
            }
        </div>

    return newsCollection
}

export default NewsCollection;