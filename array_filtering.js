let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = number.filter(function evenNumbers(number) {
  return number % 2 === 0;
});
