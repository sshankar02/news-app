import Filter from "../../molecules/FilterWizard";
import NewsCollection from "../../molecules/NewsCollection";
import './NewsHome.css'

const NewsHome = props =>{
    const {rows=[], loader=false, action=()=>{}} = props;

    return <div className="news-home">
            <Filter action={action} />
            <div className="news-collection-container">
                {loader ? <div className='loading-overlay'><span className="loading-spinner"></span></div> : ''}
                <NewsCollection rows={rows} loader={loader}/>
            </div>
        </div>
}

export default NewsHome;