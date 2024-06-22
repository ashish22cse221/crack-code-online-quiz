const questions = [
    {
      question: "Write a function to find the sum of all positive integers less than or equal to a given number.",
      options: [
        "function sumPositive(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
        "function calculateSum(n) { return n * (n + 1) / 2; }",
        "function findSum(n) { let sum = 0; for (let i = n; i > 0; i--) { sum += i; } return sum; }",
        "function sum(n) { return (n * (n + 1)) / 2; }"
      ],
      answer: "function sumPositive(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
      explanation: "This function iterates from 1 to the given number and accumulates the sum of all integers."
    },
    // New questions
    {
      question: "Write a function to reverse a string.",
      options: [
        "function reverseString(str) { return str.split('').reverse().join(''); }",
        "function backwardString(str) { let reversed = ''; for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; } return reversed; }",
        "function strReverse(str) { let reversed = ''; for (let char of str) { reversed = char + reversed; } return reversed; }",
        "function invertString(str) { let reversed = ''; for (let i = 0; i < str.length; i++) { reversed = str[i] + reversed; } return reversed; }"
      ],
      answer: "function reverseString(str) { return str.split('').reverse().join(''); }",
      explanation: "This function splits the string into an array, reverses it, and then joins it back into a string."
    },
    {
      question: "Write a function to check if a given number is prime.",
      options: [
        "function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }",
        "function checkPrime(num) { if (num <= 1) return false; for (let i = 2; i < num; i++) { if (num % i === 0) return false; } return true; }",
        "function primeCheck(num) { if (num <= 1) return false; for (let i = 2; i <= num / 2; i++) { if (num % i === 0) return false; } return true; }",
        "function testPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.floor(num / 2); i++) { if (num % i === 0) return false; } return true; }"
      ],
      answer: "function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }",
      explanation: "This function checks divisibility of the number up to its square root to determine if it's prime."
    },
    {
      question: "Write a function to remove duplicate characters from a string.",
      options: [
        "function removeDuplicates(str) { return str.split('').filter((char, index, array) => array.indexOf(char) === index).join(''); }",
        "function deleteDuplicates(str) { let unique = ''; for (let char of str) { if (!unique.includes(char)) unique += char; } return unique; }",
        "function eliminateDuplicates(str) { let unique = ''; for (let i = 0; i < str.length; i++) { if (str.indexOf(str[i]) === i) unique += str[i]; } return unique; }",
        "function deduplicate(str) { let unique = ''; for (let char of str) { if (unique.indexOf(char) === -1) unique += char; } return unique; }"
      ],
      answer: "function removeDuplicates(str) { return str.split('').filter((char, index, array) => array.indexOf(char) === index).join(''); }",
      explanation: "This function splits the string into an array, filters out duplicate characters, and then joins the array back into a string."
    },
    {
      question: "Write a function to check if a string is a palindrome.",
      options: [
        "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
        "function checkPalindrome(str) { let reversed = ''; for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; } return str === reversed; }",
        "function palindrome(str) { let reversed = ''; for (let char of str) { reversed = char + reversed; } return str === reversed; }",
        "function testPalindrome(str) { let reversed = ''; for (let i = 0; i < str.length; i++) { reversed = str[i] + reversed; } return str === reversed; }"
      ],
      answer: "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
      explanation: "This function compares the original string with its reverse to determine if it's a palindrome."
    },
    {
      question: "Write a function to find the factorial of a given number.",
      options: [
        "function factorial(n) { if (n === 0 || n === 1) return 1; let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; }",
        "function calcFactorial(n) { let result = 1; for (let i = n; i > 0; i--) { result *= i; } return result; }",
        "function findFactorial(n) { let result = 1; for (let i = 1; i <= n; i++) { result *= i; } return result; }",
        "function factorialize(n) { let result = n; for (let i = n - 1; i > 1; i--) { result *= i; } return result; }"
      ],
      answer: "function factorial(n) { if (n === 0 || n === 1) return 1; let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; }",
      explanation: "This function calculates the factorial of a number using iteration."
    },
    {
      question: "Write a function to find the nth Fibonacci number.",
      options: [
        "function fibonacci(n) { let fib = [0, 1]; for (let i = 2; i <= n; i++) { fib[i] = fib[i - 1] + fib[i - 2]; } return fib[n]; }",
        "function findFibonacci(n) { let a = 0, b = 1; for (let i = 2; i <= n; i++) { let temp = b; b = a + b; a = temp; } return b; }",
        "function nthFibonacci(n) { if (n <= 1) return n; return nthFibonacci(n - 1) + nthFibonacci(n - 2); }",
        "function calculateFibonacci(n) { let fib = [0, 1]; for (let i = 2; i <= n; i++) { fib.push(fib[i - 1] + fib[i - 2]); } return fib[n]; }"
      ],
      answer: "function fibonacci(n) { let fib = [0, 1]; for (let i = 2; i <= n; i++) { fib[i] = fib[i - 1] + fib[i - 2]; } return fib[n]; }",
      explanation: "This function uses dynamic programming to efficiently compute the nth Fibonacci number."
    },
    {
      question: "Write a function to count the number of vowels in a string.",
      options: [
        "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
        "function findVowels(str) { let count = 0; const vowels = ['a', 'e', 'i', 'o', 'u']; for (let char of str.toLowerCase()) { if (vowels.includes(char)) count++; } return count; }",
        "function vowelCount(str) { let count = 0; for (let char of str.toLowerCase()) { if ('aeiou'.includes(char)) count++; } return count; }",
        "function getVowelCount(str) { return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length; }"
      ],
      answer: "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
      explanation: "This function uses a regular expression to match and count all vowels in the string."
    },
    {
      question: "Write a function to check if two strings are anagrams of each other.",
      options: [
        "function areAnagrams(str1, str2) { return str1.split('').sort().join('') === str2.split('').sort().join(''); }",
        "function checkAnagrams(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }",
        "function anagramCheck(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }",
        "function testAnagrams(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }"
      ],
      answer: "function areAnagrams(str1, str2) { return str1.split('').sort().join('') === str2.split('').sort().join(''); }",
      explanation: "This function sorts both strings alphabetically and compares them to check if they are the same."
    },
    {
      question: "Write a function to find the longest word in a sentence.",
      options: [
        "function longestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
        "function findLongest(sentence) { let words = sentence.split(' '); return words.reduce((longest, word) => word.length > longest.length ? word : longest, ''); }",
        "function getLongestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
        "function findLargest(sentence) { let words = sentence.split(' '); return words.sort((a, b) => b.length - a.length)[0]; }"
      ],
      answer: "function longestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
      explanation: "This function splits the sentence into words and iterates through them to find the longest one."
    },
    {
      question: "Write a function to check if a number is a perfect square.",
      options: [
        "function isPerfectSquare(num) { return Math.sqrt(num) % 1 === 0; }",
        "function checkSquare(num) { for (let i = 1; i * i <= num; i++) { if (i * i === num) return true; } return false; }",
        "function perfectSquare(num) { return Number.isInteger(Math.sqrt(num)); }",
        "function squareCheck(num) { return Math.sqrt(num) % 1 === 0; }"
      ],
      answer: "function isPerfectSquare(num) { return Math.sqrt(num) % 1 === 0; }",
      explanation: "This function checks if the square root of the number is an integer."
    },
    {
        question: "Write a function to find the sum of all positive integers less than or equal to a given number.",
        options: [
          "function sumPositive(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
          "function calculateSum(n) { return n * (n + 1) / 2; }",
          "function findSum(n) { let sum = 0; for (let i = n; i > 0; i--) { sum += i; } return sum; }",
          "function sum(n) { return (n * (n + 1)) / 2; }"
        ],
        answer: "function sumPositive(n) { let sum = 0; for (let i = 1; i <= n; i++) { sum += i; } return sum; }",
        explanation: "This function iterates from 1 to the given number and accumulates the sum of all integers."
      },
      // New questions...
      {
        question: "Write a function to find the minimum element in an array.",
        options: [
          "function minElement(arr) { let min = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] < min) { min = arr[i]; } } return min; }",
          "function findMin(arr) { return Math.min(...arr); }",
          "function minimum(arr) { let min = Infinity; for (let i = 0; i < arr.length; i++) { if (arr[i] < min) { min = arr[i]; } } return min; }",
          "function smallest(arr) { let min = arr[0]; arr.forEach(element => { if (element < min) { min = element; } }); return min; }"
        ],
        answer: "function minElement(arr) { let min = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] < min) { min = arr[i]; } } return min; }",
        explanation: "This function iterates through the array, updating the minimum element found so far."
      },
      {
        question: "Write a function to find the average of elements in an array.",
        options: [
          "function arrayAverage(arr) { return arr.reduce((sum, current) => sum + current, 0) / arr.length; }",
          "function average(arr) { let sum = 0; for (let num of arr) { sum += num; } return sum / arr.length; }",
          "function findAverage(arr) { return arr.reduce((acc, val) => acc + val, 0) / arr.length; }",
          "function avg(arr) { let sum = arr.reduce((a, b) => a + b, 0); return sum / arr.length; }"
        ],
        answer: "function arrayAverage(arr) { return arr.reduce((sum, current) => sum + current, 0) / arr.length; }",
        explanation: "This function calculates the sum of all elements in the array and divides it by the number of elements to find the average."
      },
      {
        question: "Write a function to check if a string contains only unique characters.",
        options: [
          "function hasUniqueChars(str) { return new Set(str).size === str.length; }",
          "function uniqueCharacters(str) { return str.split('').every((char, index, array) => array.indexOf(char) === index); }",
          "function checkUnique(str) { return str === str.split('').filter((item, index, arr) => arr.indexOf(item) === index).join(''); }",
          "function isUnique(str) { return str.length === new Set(str).size; }"
        ],
        answer: "function hasUniqueChars(str) { return new Set(str).size === str.length; }",
        explanation: "This function converts the string into a Set, which automatically removes duplicates, and compares its size with the original string length."
      },
      {
        question: "Write a function to check if a number is a perfect square.",
        options: [
          "function isPerfectSquare(num) { return Math.sqrt(num) % 1 === 0; }",
          "function checkSquare(num) { for (let i = 1; i * i <= num; i++) { if (i * i === num) return true; } return false; }",
          "function perfectSquare(num) { return Number.isInteger(Math.sqrt(num)); }",
          "function squareCheck(num) { return Math.sqrt(num) % 1 === 0; }"
        ],
        answer: "function isPerfectSquare(num) { return Math.sqrt(num) % 1 === 0; }",
        explanation: "This function checks if the square root of the number is an integer."
      },
      {
        question: "Write a function to check if two strings are anagrams of each other.",
        options: [
          "function areAnagrams(str1, str2) { return str1.split('').sort().join('') === str2.split('').sort().join(''); }",
          "function checkAnagrams(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }",
          "function anagramCheck(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }",
          "function testAnagrams(str1, str2) { let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }"
        ],
        answer: "function areAnagrams(str1, str2) { return str1.split('').sort().join('') === str2.split('').sort().join(''); }",
        explanation: "This function sorts both strings alphabetically and compares them to check if they are the same."
      },
      {
        question: "Write a function to find the longest word in a sentence.",
        options: [
          "function longestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
          "function findLongest(sentence) { let words = sentence.split(' '); return words.reduce((longest, word) => word.length > longest.length ? word : longest, ''); }",
          "function getLongestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
          "function findLargest(sentence) { let words = sentence.split(' '); return words.sort((a, b) => b.length - a.length)[0]; }"
        ],
        answer: "function longestWord(sentence) { let words = sentence.split(' '); let longest = ''; for (let word of words) { if (word.length > longest.length) longest = word; } return longest; }",
        explanation: "This function splits the sentence into words and iterates through them to find the longest one."
      },
      {
        question: "Write a function to count the number of vowels in a string.",
        options: [
          "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
          "function findVowels(str) { let count = 0; const vowels = ['a', 'e', 'i', 'o', 'u']; for (let char of str.toLowerCase()) { if (vowels.includes(char)) count++; } return count; }",
          "function vowelCount(str) { let count = 0; for (let char of str.toLowerCase()) { if ('aeiou'.includes(char)) count++; } return count; }",
          "function getVowelCount(str) { return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length; }"
        ],
        answer: "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
        explanation: "This function uses a regular expression to match and count all vowels in the string."
      },
      {
        question: "Write a function to check if a number is a prime number.",
        options: [
          "function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }",
          "function checkPrime(num) { if (num <= 1) return false; for (let i = 2; i < num; i++) { if (num % i === 0) return false; } return true; }",
          "function primeCheck(num) { if (num <= 1) return false; for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) { if (num % i === 0) return false; } return true; }",
          "function testPrime(num) { if (num <= 1) return false; for (let i = 2; i < num; i++) { if (num % i === 0) return false; } return true; }"
        ],
        answer: "function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }",
        explanation: "This function checks divisibility of the number by all integers up to its square root to determine if it's prime."
      },
      {
        question: "Write a function to reverse a string.",
        options: [
          "function reverseString(str) { return str.split('').reverse().join(''); }",
          "function reverse(str) { let reversed = ''; for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; } return reversed; }",
          "function stringReverse(str) { let reversed = ''; for (let char of str) { reversed = char + reversed; } return reversed; }",
          "function strReverse(str) { return str.split('').reduce((rev, char) => char + rev, ''); }"
        ],
        answer: "function reverseString(str) { return str.split('').reverse().join(''); }",
        explanation: "This function splits the string into an array of characters, reverses the array, and joins the characters back into a string."
      },
      {
        question: "Write a function to check if a string is a palindrome.",
        options: [
          "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
          "function palindromeCheck(str) { let reversed = ''; for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; } return str === reversed; }",
          "function checkPalindrome(str) { let reversed = ''; for (let char of str) { reversed = char + reversed; } return str === reversed; }",
          "function testPalindrome(str) { return str === str.split('').reverse().join(''); }"
        ],
        answer: "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
        explanation: "This function checks if the string is equal to its reverse, indicating it's a palindrome."
      },
      {
        question: "Write a function to find the factorial of a number.",
        options: [
          "function factorial(n) { if (n === 0 || n === 1) return 1; let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; }",
          "function findFactorial(n) { let result = 1; for (let i = n; i > 1; i--) { result *= i; } return result; }",
          "function calculateFactorial(n) { return n === 0 ? 1 : n * calculateFactorial(n - 1); }",
          "function getFactorial(n) { let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; }"
        ],
        answer: "function factorial(n) { if (n === 0 || n === 1) return 1; let result = 1; for (let i = 2; i <= n; i++) { result *= i; } return result; }",
        explanation: "This function calculates the factorial of a number by multiplying all integers from 1 to the number."
      },
      {
        question: "Write a function to find the greatest common divisor (GCD) of two numbers.",
        options: [
          "function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }",
          "function findGCD(a, b) { while (b !== 0) { let temp = b; b = a % b; a = temp; } return a; }",
          "function calculateGCD(a, b) { while (b !== 0) { let temp = b; b = a % b; a = temp; } return a; }",
          "function getGCD(a, b) { return b === 0 ? a : getGCD(b, a % b); }"
        ],
        answer: "function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }",
        explanation: "This function uses Euclid's algorithm recursively to find the GCD of two numbers."
      },
      {
        question: "Write a function to find the LCM (Least Common Multiple) of two numbers.",
        options: [
          "function lcm(a, b) { return (a * b) / gcd(a, b); }",
          "function findLCM(a, b) { let max = Math.max(a, b); let min = Math.min(a, b); let lcm = max; while (true) { if (lcm % min === 0 && lcm % max === 0) { return lcm; } lcm += max; } }",
          "function calculateLCM(a, b) { let lcm = Math.max(a, b); while (true) { if (lcm % a === 0 && lcm % b === 0) { return lcm; } lcm++; } }",
          "function getLCM(a, b) { return (a * b) / gcd(a, b); }"
        ],
        answer: "function lcm(a, b) { return (a * b) / gcd(a, b); }",
        explanation: "This function calculates the LCM by multiplying the numbers and dividing by their GCD."
      },
      {
        question: "Write a function to find the number of digits in an integer.",
        options: [
          "function countDigits(num) { return Math.abs(num).toString().length; }",
          "function findDigits(num) { return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num)) + 1); }",
          "function digitCount(num) { return num.toString().length; }",
          "function getDigitCount(num) { return Math.abs(num).toString().length; }"
        ],
        answer: "function countDigits(num) { return Math.abs(num).toString().length; }",
        explanation: "This function converts the absolute value of the number to a string and returns its length."
      },
      {
        question: "Write a function to generate Fibonacci sequence up to a specified number of terms.",
        options: [
          "function fibonacci(n) { let sequence = [0, 1]; for (let i = 2; i < n; i++) { sequence.push(sequence[i - 1] + sequence[i - 2]); } return sequence; }",
          "function generateFibonacci(n) { let sequence = [0, 1]; for (let i = 2; i < n; i++) { sequence[i] = sequence[i - 1] + sequence[i - 2]; } return sequence; }",
          "function fibSequence(n) { let sequence = [0, 1]; for (let i = 2; i < n; i++) { sequence.push(sequence[i - 1] + sequence[i - 2]); } return sequence; }",
          "function createFibonacci(n) { let sequence = [0, 1]; for (let i = 2; i < n; i++) { sequence.push(sequence[i - 1] + sequence[i - 2]); } return sequence; }"
        ],
        answer: "function fibonacci(n) { let sequence = [0, 1]; for (let i = 2; i < n; i++) { sequence.push(sequence[i - 1] + sequence[i - 2]); } return sequence; }",
        explanation: "This function generates a Fibonacci sequence up to the specified number of terms."
      },
      {
        question: "Write a function to check if a year is a leap year.",
        options: [
          "function isLeapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }",
          "function checkLeapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }",
          "function leapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }",
          "function testLeapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }"
        ],
        answer: "function isLeapYear(year) { return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); }",
        explanation: "This function checks if the year is divisible by 4 but not by 100 unless it's also divisible by 400."
      },
      {
        question: "Write a function to find the sum of all multiples of 3 or 5 below a given number.",
        options: [
          "function sumMultiples(n) { let sum = 0; for (let i = 3; i < n; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } return sum; }",
          "function findSum(n) { let sum = 0; for (let i = 1; i < n; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } return sum; }",
          "function calculateSum(n) { let sum = 0; for (let i = 3; i < n; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } return sum; }",
          "function getSum(n) { let sum = 0; for (let i = 1; i < n; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } return sum; }"
        ],
        answer: "function sumMultiples(n) { let sum = 0; for (let i = 3; i < n; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } return sum; }",
        explanation: "This function iterates from 3 up to the given number and adds numbers that are multiples of 3 or 5 to the sum."
      },
      {
        question: "Write a function to find the largest prime factor of a given number.",
        options: [
          "function largestPrimeFactor(num) { let factor = 2; while (factor <= num) { if (num % factor === 0) { num /= factor; } else { factor++; } } return factor; }",
          "function findLargestFactor(num) { let factor = 2; while (factor <= num) { if (num % factor === 0) { num /= factor; } else { factor++; } } return factor; }",
          "function getLargestFactor(num) { let factor = 2; while (factor <= num) { if (num % factor === 0) { num /= factor; } else { factor++; } } return factor; }",
          "function calculateLargestFactor(num) { let factor = 2; while (factor <= num) { if (num % factor === 0) { num /= factor; } else { factor++; } } return factor; }"
        ],
        answer: "function largestPrimeFactor(num) { let factor = 2; while (factor <= num) { if (num % factor === 0) { num /= factor; } else { factor++; } } return factor; }",
        explanation: "This function iteratively divides the given number by its smallest prime factor until the number becomes 1, then returns the last factor used."
      }
    ];
  



let score = 0;
let timeLeft = 0;
let timer;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const usernameInput = document.getElementById("username");
const exitBtn = document.getElementById("exit-btn");
const explanationDiv = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", startQuiz);
exitBtn.addEventListener("click", exitQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-input").style.display = "none";
    startBtn.style.display = "none";
    exitBtn.style.display = "none";
    explanationDiv.style.display = "none";
    nextBtn.style.display = "none";
    score = 0;
    timeLeft = 60;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    shuffledQuestions = shuffledQuestions.slice(0, 10);
    loadQuestion();
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        timeLeft--;
    }
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        endQuiz();
        return;
    }
    explanationDiv.style.display = "none"; // Hide explanation
    nextBtn.style.display = "none";
    const question = shuffledQuestions.pop();
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            if (option === question.answer) {
                score++;
                scoreElement.textContent = score;
                button.classList.add("correct");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            } else {
                button.classList.add("wrong");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            }
            // Disable all options after selecting one
            document.querySelectorAll('.option').forEach(button => button.disabled = true);
        });
        optionsElement.appendChild(button);
    });
}

function showExplanation(explanation) {
    explanationDiv.style.display = "block";
    explanationText.textContent = explanation;
}

function loadNextQuestion() {
    explanationDiv.style.display = "none";
    loadQuestion();
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    clearInterval(timer);
    document.getElementById("user-input").style.display = "block";
    exitBtn.style.display = "inline-block";
    nextBtn.style.display = "none"; // Hide the Next button
    updateLeaderboard(usernameInput.value.trim(), score);
}

function updateLeaderboard(username, score) {
    let leaderboard = localStorage.getItem("leaderboard");
    leaderboard = leaderboard ? JSON.parse(leaderboard) : [];
    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Keep only top 5 scores
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1}: ${entry.username} - ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

  const leftEye = document.querySelector(".eye-left");
  const rightEye = document.querySelector(".eye-right");
  const mouth = document.querySelector(".mouth");

  nextBtn.addEventListener("click", () => {
    // Blink eyes
    setTimeout(() => {
      leftEye.style.transform = "scaleY(0)";
      rightEye.style.transform = "scaleY(0)";
    }, 100);

    setTimeout(() => {
      leftEye.style.transform = "scaleY(1)";
      rightEye.style.transform = "scaleY(1)";
    }, 500);

    // Talk mouth
    mouth.style.transform = "translateY(5px)";
    setTimeout(() => {
      mouth.style.transform = "translateY(0)";
    }, 500);
  });

function exitQuiz() {
    location.reload();
}
