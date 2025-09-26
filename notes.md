# Sieve of Eratosthenes - JavaScript - Planning Notes

## Research Phase

### History: Sieve of Eratosthenes:

- Ancient algorithm created by the Greek mathematician, Eratosthenes.
- Efficient way of finding all prime numbers up to a given number n.
- A prime number is only divisible by 1 and itself (examples: `[2, 3, 5, 7, 11, 13...]`)
- Fun fact: 2 is the only even prime number, all other even numbers are not prime because they are divisible by 2.
- The algorithm works by creating a list of numbers, then starting at 2, crossing off the multiples of each number. Keeping going through the number list and at the end the numbers remaining are prime.
- The crossed-out numbers are called composite numbers, meaning they are divisible by more than 2 numbers.

## Implementation Phase

### 1: Build helper function

- Started with `isPrime(number)` function to find prime numbers.
- Handled edge cases I learned in research (0, 1, and 2).
- Used a for loop with the modulo operator to check the divisibility of the numbers.
- Tested with console.log examples, function working:

```
const sieve = new Sieve();
console.log("2", sieve.isPrime(2));
console.log("4", sieve.isPrime(4));
console.log("9", sieve.isPrime(9));
console.log("17", sieve.isPrime(17));
console.log("244", sieve.isPrime(244));
```

- Node test results:

```
node sieve.js
2 true
4 false
9 false
17 true
244 false
```
