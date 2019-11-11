
const Axios = require('axios')



btn = document.getElementById('btn');
console.log(btn)
btn.onclick = function(){
    if(document.getElementById('country').value=='Brasil'){
        country = 'br';
        console.log(country)
    }else if(document.getElementById('country').value=='Alemanha'){
        country = 'de';
    } else if(document.getElementById('country').value=='França'){
        country = 'fr';
    } else if(document.getElementById('country').value=='Inglaterra'){
        country = 'en';
    }else if (document.getElementById('country').value=='Russia'){
        country = 'ru';
    }
    
    if(document.getElementById('categoria').value=='Esportes'){
        categoria = 'sports';
        console.log(categoria)
    }else if(document.getElementById('categoria').value=='Entreterimento'){
        categoria = 'entertainment';
    } else if(document.getElementById('categoria').value=='Negocios'){
        categoria = 'business';
    } else if(document.getElementById('categoria').value=='Saude'){
        categoria = 'health';
    }else if (document.getElementById('categoria').value=='Tecnologia'){
        categoria = 'technology';
    }
    
    if(document.getElementById('ordenar').value=='Popularidade'){
        ordenar = 'popularity';
    }else if(document.getElementById('ordenar').value=='Relevancia'){
        ordenar = 'relevancy';
    } else if(document.getElementById('ordenar').value=='Noticias mais novas'){
        ordenar = 'publishedAt';
    } 
    
    if(document.getElementById('lingua').value=='Portugues'){
        lingua = 'pt';
    }else if(document.getElementById('lingua').value=='Alemao'){
        lingua = 'de';
    } else if(document.getElementById('lingua').value=='Frances'){
        lingua = 'fr';
    } else if(document.getElementById('lingua').value=='Ingles'){
        lingua = 'in';
    }else if (document.getElementById('lingua').value=='Russo'){
        lingua = 'ru';
    }
    const url = 'https://newsapi.org/v2/top-headlines?country='+country+'&category='+categoria+'&from=2019-11-06&sortBy='+ordenar+'&language='+lingua+'&apiKey=87a7928e6caa4869a1c8afe853284ace';
    console.log(url)
    const request = () => {
        try {
            Axios.get(url).then((e) => init(e.data.articles));
        } catch (err) {
            return 'deu erro:' + err
        }
    }
    function init(response) {
        console.log(response)
        contador = parseInt(document.getElementById('contador').value)
        for (i = 0 ; i < contador ; i++ ){
            html = '<div class="d-flex justify-content-center mt-5 mb-5"><div class="card" style="width: 90%; height: 30  rem;"> <img src="'+
            response[i].urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+
            response[i].title+'</h5><p class="card-text">'+
            response[i].description+'</p><a href="'+
            response[i].url+'" class="btn btn-primary">Go somewhere</a></div></div></div>';
            document.body.innerHTML += html;
        }
        
       
    }
    request();

    
}

// const url = 'https://newsapi.org/v2/top-headlines?country='+country+'&category='+categoria+'&from=2019-11-06&sortBy='+ordenar+'&language='+lingua+'&apiKey=87a7928e6caa4869a1c8afe853284ace';

// const request = () => {
//     try {
//         Axios.get(url).then((e) => init(e.data.articles));
//     } catch (err) {
//         return 'deu erro:' + err
//     }
// }

// function init(response) {
//     console.log(response)
//     for (i=0; i<document.getElementById('contador').value; i++ ){
//         html = '<div class="d-flex justify-content-center mt-5 mb-5"><div class="card" style="width: 90%; height: 30  rem;"> <img src="'+
//         response[i].urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+
//         response[i].title+'</h5><p class="card-text">'+
//         response[i].description+'</p><a href="'+
//         response[i].url+'" class="btn btn-primary">Go somewhere</a></div></div></div>';
//         document.body.innerHTML += html;
//     }
   
// }

// request();

//fazer função para q quando click no botão chame ela e faça a colocação dos valores nos lugares.

