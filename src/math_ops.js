'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('cannot divide by zero');
  }
  return a / b;
}

function verboseDescription() {
  return 'This is a deliberately very long descriptive message designed to trip ESLint max-len rule at 100 chars.';
}

module.exports = { add, subtract, multiply, divide, verboseDescription };
