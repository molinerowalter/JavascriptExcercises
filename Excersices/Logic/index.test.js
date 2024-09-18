const { 
    fizzBuzz,
    areAnagramas,
    fibonacci,
    isCousin
} = require('./index')

describe('fizzbuzz. Return fizz for multiples of 3 and buzz for multiples of 5 and fizzbuzz for both', () => {
    test('when number is multiple of 3 returns "fizz"', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })

    test('when number is multiple of 5 returns "buzz"', () => {
        expect(fizzBuzz(10)).toBe('buzz')
    })

    test('when number is multiple of 3 and 5 returns "fizzbuzz"', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz') 
    })

    test('when number is not multiple of 3 either 5 returns the number', () => {
        expect(fizzBuzz(4)).toBe(4) 
    })
})

describe("are Anagramas? ", () => {
    test('trully case', () => {
        expect(areAnagramas('plato', 'olapt')).toEqual(true)
    })

    test('falsy case (different words)', () => {
        expect(areAnagramas('plafto', 'olagpt')).toEqual(false)
    })

    test('falsy case (same words)', () => {
        expect(areAnagramas('plato', 'plato')).toEqual(false)
    })

    test('trully Upercase', () => {
        expect(areAnagramas('PlaTo', 'AtoLp')).toEqual(true)
    })
})

describe("fibonacci", () => {
    test("finacci sucession: ", ()=>{
        expect(fibonacci([0,1])).toStrictEqual([
            0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
            55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
            6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229,
            832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
            102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049
          ])
    })
})

describe("isCousin", ()=>{
    test("truthy case", ()=>{
        expect(isCousin(5)).toBe(true)
    })

    test("falsy case", ()=>{
        expect(isCousin(10)).toBe(false)
    })

    test("truthy case", ()=>{
        expect(isCousin(13)).toBe(true)
    })

    test("falsy case", ()=>{
        expect(isCousin(35)).toBe(false)
    })
})