
const getImage = async() => {
    const apikey = "api_key";
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const data = await peticion.json();

    console.log(data);
}

getImage()