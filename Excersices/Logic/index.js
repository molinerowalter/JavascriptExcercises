/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzBuzzIteration() {
    for (let iterator = 0; iteratior <= 100; iterator++) {
        console.log(`${fizzBuzz(iterator)}\n`) 
    }
}

function fizzBuzz(value) {
    const isMultiplo = (value, multiplicity) => {
        return value%multiplicity === 0
    }

    if (isMultiplo(value, 3) && isMultiplo(value, 5)) {
        return 'fizzbuzz'
    } else if (isMultiplo(value,3)) {
        return 'fizz'
    } else if (isMultiplo(value,5)) {
        return 'buzz'
    }

    return value
}

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function areAnagramas(wordA, wordB) {
    if (wordA.toLowerCase() === wordB.toLowerCase()) {
        return false
    }

    let wordBArrayed = wordB.split('')

    for (let i = 0; i < wordA.length; i++) {
        const indexAtB = wordBArrayed.findIndex(charB => charB.toLowerCase() === wordA[i].toLowerCase())

        if (indexAtB < 0) {
            return false
        } else {
            wordBArrayed.splice(indexAtB, 1)
        }

        if (i === wordA.length-1 && !wordBArrayed.length) {
            return true
        }
    }

    return false
}


/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function printFibonacci() {
    const initialState = [0,1]
    fibonacci(initialState)
}

function fibonacci(colection) {
    const currentLength = colection.length

    if (currentLength === 50) {
        return colection
    }

    return fibonacci([...colection, colection[currentLength-1]+colection[currentLength-2]])
}

printFibonacci()


/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function printCousins() {
    for (i=0; i<100; i++) {
        console.log("value: ", i, " is cousin: ", isCousin(i))
    }
}

function isCousin(value) {
    if (value < 2) {
        return false
    }

    for (let i=2; i<value; i++) {
        if (value%i === 0) {
            return false
        } 
    }

    return true
}

printCousins()

module.exports = { fizzBuzz, areAnagramas, fibonacci, isCousin }