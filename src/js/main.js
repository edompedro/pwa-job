
const Axios = require('axios')

const url = 'https://newsapi.org/v2/top-headlines?country=br&category=sports&from=2019-11-06&sortBy=popularity&language=pt&apiKey=87a7928e6caa4869a1c8afe853284ace';

const request = () => {
    try {
        Axios.get(url).then((e) => init(e.data.articles));
    } catch (err) {
        return 'deu erro:' + err
    }
}

function init(response) {
    console.log(response)
}

request();