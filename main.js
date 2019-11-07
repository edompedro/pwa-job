
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
    for (i=0; i<5; i++ ){
        html = '<div class="d-flex justify-content-center mt-5 mb-5"><div class="card" style="width: 18rem;"> <img src="'+response[i].urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+response[i].title+'</h5><p class="card-text">'+response[i].description+'</p><a href="'+response[i].url+'" class="btn btn-primary">Go somewhere</a></div></div></div>'
    document.body.innerHTML += html;
    }
   
}



// for (i=0; i<5; i++ ){
//     let title = document.getElementById('title'+i);
//     title.innerHTML = response[i].title   //criar um for q em cada passada cria um novo card no index
//     let description = document.getElementById('description'+i);
//     description.innerHTML = response[i].description
//     let author = document.getElementById('author'+i);
//     author.innerHTML = response[i].author
//     let link = document.getElementById('link'+i);
//     link.innerHTML = response[i].url;
//     }

request();