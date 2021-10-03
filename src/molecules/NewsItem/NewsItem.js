import './NewsItem.css';

const NewsItem = props => {
    const {row = {}} = props;

    const rowElement = <a className="news-item" data-testid="news-item" href={row.url} target="_blank" rel="noopener noreferrer">
            <div className="news-item-image"><img src={row.urlToImage} alt=""/></div>
            <div className="news-item-details">
                <p className="news-item-details-title">{row.title}</p>
                <p className="news-item-details-description">
                    {row.description}
                    <span className="news-item-read-more"> ...Read more</span>
                </p>
                <div className="news-item-credentials">
                    <span className="author">Author: {row.author}</span>
                    <span className="published-date">Published date: {row.publishedAt}</span>
                </div>
            </div>
        </a>

    return rowElement;
}

export default NewsItem;