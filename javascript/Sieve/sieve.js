class Sieve {
  constructor() {
    this.cache = []; // Cache primes for faster checks
  }

  isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    const squareRoot = Math.sqrt(number);
    for (let primeNumber of this.cache) {
      if (primeNumber > squareRoot) break; // Stop check if more than square root of number
      if (number % primeNumber === 0) {
        return false;
      }
    }
    return true;
  }

  NthPrime(n) {
    // Return nth prime if already in cache
    if (this.cache[n] !== undefined) return this.cache[n];

    let currentNumber =
      // Start from next number after last cached prime, or 2 if cache is empty
      this.cache.length > 0 ? this.cache[this.cache.length - 1] + 1 : 2;

    let count = this.cache.length;

    while (count <= n) {
      // Keep looping until finding nth prime
      if (this.isPrime(currentNumber)) {
        this.cache.push(currentNumber); // Add new prime to cache
        count++;
      }
      currentNumber++;
    }
    return this.cache[n];
  }
}

module.exports = Sieve;
