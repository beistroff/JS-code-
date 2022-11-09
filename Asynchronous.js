
//const fetch = require('node-fetch');

//error first callback
const fs = require('fs');

// fs.readFile('./text.txt', {encoding: 'utf-8'}, (err, data) => {
//     if (err){
//         console.log('ERROR');
//         console.log(err);
//     } else {
//         console.log('GOT DATA');
//         console.log(data);
//     }

// });

const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0){
        resolve();
    } else {
        reject(); 
    }
});

myPromise
    .then(() => console.log('success'))
    .catch(() =>console.error("Something went wrong!"));

fs.promises
    .readFile('./text.txt', {encoding: 'utf-8'} )
    .then((data) => console.log(data))
    .catch((err) => console.log(err));    