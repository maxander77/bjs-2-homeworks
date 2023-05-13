"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1, root2);
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}