"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

      if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    } else if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (typeof percent !== 'number' || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
      return false;
  }

  percent = percent / 100;
  let loamBody = amount - contribution;
  let monthPercent = percent / 12;
  let payment = loamBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  
  let totalPayment = payment * countMonths;
  let roundedPayment = Math.round(totalPayment * 100) / 100;
  return roundedPayment;

}

const payment1 = calculateTotalMortgage(10, 0, 50000, 12);
console.log(payment1);
const payment2 = calculateTotalMortgage(10, 1000, 50000, 12);
console.log(payment2);
const payment3 = calculateTotalMortgage(10, 0, 20000, 24);
console.log(payment3);
const payment4 = calculateTotalMortgage(10, 1000, 20000, 24);
console.log(payment4);
const payment5 = calculateTotalMortgage(10, 20000, 20000, 24);
console.log(payment5);