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
    throw new Error("unimplemented");
  }
}

module.exports = Sieve;
