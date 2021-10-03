import './NewsItem.css';

const NewsItem = props => {
    const {row = {}} = props;

    const showNewsHandler = () =>{
        console.log(row);
    }

    const rowElement = <div className="news-item" data-testid="news-item" onClick={showNewsHandler}>
            <div className="news-item-image"><img src={row.urlToImage} alt={row.title}/></div>
            <div className="news-item-details">
                <p className="news-item-details-title">{row.title}</p>
                <p className="news-item-details-description">
                    {row.description}
                    <span className="news-item-read-more" onClick={showNewsHandler}>Read more</span>
                </p>
                <div>
                    <span>Author:{row.author}</span>
                    <span></span>
                </div>
            </div>
        </div>

    return rowElement;
}

export default NewsItem;