import UrlDictionary from './UrlDictionary';

const GetFilteresHeadlines = (environment='default', keyword) =>{
    const url = UrlDictionary('getFilteredNews', environment, keyword)();

    const requestOptions = {
        method:'GET'
    }
    return fetch(url, requestOptions)
        .catch(err => console.log(err))
        .then(res => res.json())
}

export default GetFilteresHeadlines;