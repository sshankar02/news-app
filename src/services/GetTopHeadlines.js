import UrlDictionary from './UrlDictionary';

const GetTopHeadlines = (environment) =>{
    // const environment = process.env.APP_ENVIRONMENT;
    const url = UrlDictionary('getTopHeadlines', environment)();

    const requestOptions = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, requestOptions)
        .catch(err => console.log(err))
        .then(res => res.json())
}

export default GetTopHeadlines;