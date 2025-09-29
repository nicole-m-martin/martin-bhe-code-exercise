class Sieve {
  isPrime(number) {
    // Edge cases: from research we know 0 and 1 not prime numbers
    if (number < 2) return false;
    // and 2 is only even prime number
    if (number === 2) return true;

    // Check each number from 2 up to but not including number itself
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        // Use modulo to find remainder
        return false; // If remainder is 0, it divides evenly, number is not Prime
      }
    }
    return true; // Nothing divides it evenly - so number is Prime!!
  }

  NthPrime(n) {
    let count = 0; // Track primes with loop (0 index)
    let currentNumber = 2; // Start from 2 (first prime)

    while (count <= n) {
      // Keep looping until finding nth prime
      if (this.isPrime(currentNumber)) {
        if (count === n) {
          return currentNumber; // Found the nth prime!!!
        }
        count++; // count this prime and if nth prime not found keep looping to next prime
      }
      currentNumber++; // if nth prime not found move to next number to check
    }
  }
}

module.exports = Sieve;
