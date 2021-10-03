import UrlDictionary from './UrlDictionary';

const GetTopHeadlines = (environment='default') =>{
    const url = UrlDictionary('getTopHeadlines', environment)();

    const requestOptions = {
        method:'GET'
    }
    return fetch(url, requestOptions)
        .catch(err => console.log(err))
        .then(res => res ? res.json() : null)
}

export default GetTopHeadlines;