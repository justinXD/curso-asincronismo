const suma = (num1, num2) => num1 + num2

function calc(num1, num2, suma){    //suma aqui es el callback o funcion que es pasado como argumento de la funcion calc. Aqui suma bien se puede llamar chilaquil y va a funcionar
    return suma(num1, num2)         //suma (o chilaquil) recibe como argumentos num1 y num2
}

console.log(calc(2, 2, suma))   //aqui si debemos poner el nombre la funcion que va a ser nuestro callback que en este caso es la funcion suma

setTimeout(() => {
    console.log('Hola JS!')
}, 2000);

function saludo(name) {
    console.log(`Hola ${name}`)
}

setTimeout(saludo, 2000, 'Justin');