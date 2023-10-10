const permutation = function (n, r) {
  return factorial(n) / factorial(n - r);
};

const combination = function (n, r) {
  return factorial(n) / factorial(n - r) / factorial(r);
};

const multiPermutation = function (n, r) {
  return n ** r;
};

const multiCombination = function (n, r) {
  return combination(n + r - 1, r);
};

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  permutation: permutation,
  combination: combination,
  multiCombination: multiCombination,
  multiPermutation: multiPermutation,
};
