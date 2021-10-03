const UrlDictionary = (serviceName, environment = "default", queryString = "") => {
    const apis = { 
        mock : {
            getTopHeadlines : () => '../__mock__/mockData.json',
            getFilteredNews : () => '../__mock__/mockData.json'
        },
        default : {
            getTopHeadlines : () => 'https://localhost:8000',
            getFilteredNews : () => `https://localhost:8000/query/${queryString}`
        }
    }

    return apis[environment][serviceName];
}

export default UrlDictionary;