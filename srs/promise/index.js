const promise = new Promise((resolve, reject) => {
    resolve('Fino!')
})

const cows = 20
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    }else{
        reject('there are no enough cows')
    }
})

countCows
    .then((result) => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))  //.finally nos devuelve una promesa sin importar si las promesas anteriores se resolvieron o no
