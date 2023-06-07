// task 1
function parseCount(value) {
  const parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }

  return parsedValue;
} 

function validateCount(value) {
  try {
  const parsedValue = parseCount(value)
  return parsedValue;
  } catch (error) {
    return error;
  }
 }


//  task2

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.validateTriangle();
  } 

  validateTriangle(){
  if (this.side1 + this.side2 <= this.side3 ||
      this.side1 + this.side3 <= this.side2 ||
      this.side2 + this.side3 <= this.side1) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }

  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  get area() {
    const p = this.perimeter / 2;
    const totalArea = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    return Number(totalArea.toFixed(3));
  }
}

function getTriangle(side1, side2, side3) {
  try {
    const triangle = new Triangle(side1, side2, side3);
    return triangle;
  } catch (error) {
    return {
    get area() {
      return "Ошибка! Треугольник не существует";
    },
    get perimeter() {
      return "Ошибка! Треугольник не существует";
    }
   }
  }
}