import NewsCollection from "../../molecules/NewsCollection";
import './NewsHome.css'

const NewsHome = props =>{
    const {rows=[], loader=false} = props;

    return <div className="news-home">
            <div className="news-collection-container">
                {loader ? <div className='loading-overlay'><span className="loading-spinner"></span></div> : ''}
                <NewsCollection rows={rows} loader={loader}/>
            </div>
        </div>
}

export default NewsHome;