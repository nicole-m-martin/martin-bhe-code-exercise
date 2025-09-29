# Sieve of Eratosthenes - JavaScript - Planning Notes

## Research Phase

### History: Sieve of Eratosthenes:

- Ancient algorithm created by the Greek mathematician, Eratosthenes.
- Efficient way of finding all prime numbers up to a given number n.
- A prime number is only divisible by 1 and itself (examples: `[2, 3, 5, 7, 11, 13...]`)
- Fun fact: 2 is the only even prime number, all other even numbers are not prime because they are divisible by 2.
- The algorithm works by creating a list of numbers, then starting at 2, crossing off the multiples of each number. Keep going through the number list and at the end the numbers remaining are prime.
- The crossed-out numbers are called composite numbers, meaning they are divisible by more than 2 numbers.

- Resources:
  - [Geeks for Geeks.org-Sieve of Eratosthenes](https://www.geeksforgeeks.org/dsa/sieve-of-eratosthenes/)
  - [Youtube-Prime Numbers - Sieve of Eratosthenes](https://www.youtube.com/watch?v=V08g_lkKj6Q)

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

### 2: Work out the NthPrime() function method

Challenge goal: Retrieve the Nth prime number using 0-based indexing where the 0th prime number is 2

**Strategy:**

- 0-based index: `arrayIndex[0, 1, 2, 3, 4, 5]` = `primeArray[2, 3, 5, 7, 11, 13]`
- Use counter to track the prime numbers and find nth Prime number
- Use isPrime() to create new loop to find nth Prime
- When isPrime is true, go to next, and stop count when the prime = n

### 3: Testing and performance with function methods used above:

Test Results

- Small and med tests pass!
  - expect(sieve.NthPrime(0)).toBe(2);
  - expect(sieve.NthPrime(19)).toBe(71);
  - expect(sieve.NthPrime(99)).toBe(541);
  - expect(sieve.NthPrime(500)).toBe(3581);
  - expect(sieve.NthPrime(986)).toBe(7793);
  - expect(sieve.NthPrime(2000)).toBe(17393);

```
PASS  Sieve/sieve.test.js
Sieve
✓ valid results (23 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.096 s, estimated 1 s
Ran all test suites.
```

- Large tests are very slow and the test times out
  - expect(sieve.NthPrime(1000000)).toBe(15485867);
  - expect(sieve.Nthprime(10000000)).toBe(179424691);

Current `isPrime()` checks every number from 2 to number -1, so the larger checks are creating huge amount of iterations per check in the loops. Next steps, need to optimize performance for large numbers to pass remaining tests.

### 4: More research, how to find Large prime numbers and optimization attempts

- Resources:

  - [Youtube-Determining if large number is prime](https://www.youtube.com/watch?v=c7nnAktNlh4)
  - [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

- Learned that you can check the square root of the number to see if they divide evenly, this should reduce the number of checks in the loops, and hopefully not time out the test.

**First Attempt** - add Square Root check (`Math.sqrt()`) to `isPrime()` function.

```
for (let i = 2; i < Math.sqrt(number); i++)

```

**Result**:
Failed test - `expect(sieve.NthPrime(19)).toBe(71);` returned 53 instead of 71.

- Why am I getting 53 and not 71?
- Added console logs of numbers between 53 and 71 to find bug, found `sieve.isPrime(49)` was returning `true` - incorrect!
- Realized 7 x 7 = 49, and `Math.sqrt(49)` = 7
- Loop condition `i < Math.sqrt(number)` stops at `i=6`. Checking only up to 6, not 7.

**Next Attempt**

- Updated `i <= Math.sqrt(number)` to include all square root checks.
- Added new edge case to remove extra checks: early return for even numbers: `if (number % 2 ===0) return false`
- Updated loop to start at 3
- Changed loop increment from `i++` to `i +=2` to only check for odds
- This should cut the number of checks down, but:

**Result**:

- Large tests still times out
  - expect(sieve.NthPrime(1000000)).toBe(15485867);
  - expect(sieve.Nthprime(10000000)).toBe(17942469);
