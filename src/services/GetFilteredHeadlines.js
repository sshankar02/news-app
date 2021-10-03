import UrlDictionary from './UrlDictionary';

const GetFilteredHeadlines = (environment='default', keyword) =>{
    const url = UrlDictionary('getFilteredNews', environment, keyword)();

    const requestOptions = {
        method:'GET'
    }
    return fetch(url, requestOptions)
        .catch(err => console.log(err))
        .then(res => res ? res.json() : null);
}

export default GetFilteredHeadlines;