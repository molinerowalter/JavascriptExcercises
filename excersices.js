//1. Write a JavaScript function to calculate the sum of two numbers.  

function sum(a,b) {
    return a+b
}

const first = 5
const second = 3
console.log("----------------- Ex 1: Sum two numbers ----------------------")
console.log("suma between ",first, "and ", second ,"is: ", sum(first,second))

//2. Write a JavaScript program to find the maximum number in an array. 

function findHighest(arr) {
    return Math.max(...arr)
}

const arr = [-1, 3, 5, 9, -5, 1, 4 ]
console.log("----------------- Ex 2: Highest on array ----------------------")
console.log("The bigger element on this array (", arr, ") is: ", findHighest(arr))

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function isPalindrom(str) {
    return str === str.split("").reverse().join("")
}

console.log("----------------- Ex 3: Palindrome ----------------------")
console.log("isPalindrome the string 'casa': ", isPalindrom("casa") )
console.log("isPalindrome the string 'amor': ", isPalindrom("amor") )
console.log("isPalindrome the string 'neuquen': ", isPalindrom("neuquen") )

//4. Write a JavaScript program to reverse a given string.

function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log("----------------- Ex 4: reverse a given string ----------------------")
console.log("")
console.log("String reversed of 'casa' is: ", reverseString("casa"))
console.log("String reversed of 'tiranosaurio' is: ", reverseString("tiranosaurio"))
console.log("String reversed of 'inyeccion' is: ", reverseString("inyeccion"))

//5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
function onlyEvenNumbers(arr) {
    return arr.filter(el => el % 2 === 0)
}

console.log("----------------- Ex 5: Even Numbers ----------------------")
console.log("")
console.log("arr is [2,3,5,7,6,21,24,32] ")
console.log("Even numbers are: ", onlyEvenNumbers([2,3,5,7,6,21,24,32]))

//6. Write a JavaScript program to calculate the factorial of a given number. 
function factorial(value) {
    if (value === 0 || value === 1) {
        return 1
    } 

    return value * factorial(value-1)
}
console.log("----------------- Ex 6: Factorial ----------------------")
console.log("")
console.log("factorial of 1 is: ", factorial(1))
console.log("factorial of 4 is: ", factorial(4))
console.log("factorial of 3 is: ", factorial(3))

