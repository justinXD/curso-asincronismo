const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Async!!')
            }, 2000)
            : reject(new Error('Error!!'))
    })
}

const anotheFn = async() => {
    const asincrono = await fnAsync();
    console.log(asincrono);
    console.log('Hello!!')
}

console.log('Before...')
anotheFn()
console.log('Fin...')