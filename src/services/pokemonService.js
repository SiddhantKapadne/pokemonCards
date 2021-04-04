import axios from 'axios';

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((resp) => {
            resolve(resp.data);
        })
        .catch((error) => {
          alert('Something went Wrong Try again later');
        })
    })
}

export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(data => {
                resolve(data);
                // console.log(data);
            })
            .catch((error) => {
                alert('Something went Wrong Try again later');
            });
    });
}