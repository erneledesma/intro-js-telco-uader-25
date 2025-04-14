
//api.giphy.com/v1/gifs/random

const apikey = "api_key";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

// peticion
//     .then( response => response.json() )
//     .then(( { data } ) => {
//         const { url } = data.images.original;
//         console.log(url)
//     })
//     .catch(console.warn)

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const {url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
