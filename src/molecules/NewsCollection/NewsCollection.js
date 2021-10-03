import NewsItem from '../NewsItem';
import './NewsCollection.css';

const NewsCollection = props =>{
    const {rows=[], loader=false} = props;

    const newsCollection = <div className="news-collection" data-testid="news-collection">
            { rows.length === 0 && !loader
                ? <p data-testid="news-collection-message">No news to show</p>
                : rows.map((row,index) => <NewsItem key={`${index}-${row.title}`} row={row}/>) 
            }
        </div>

    return newsCollection
}

export default NewsCollection;