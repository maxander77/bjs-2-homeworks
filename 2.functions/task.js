function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
    sum += element;
  }

  const avg = sum / arr.length;

  return { min: min, max: max, avg: avg.toFixed(2) };

}

const result = getArrayParams(-99, 99, 10);
console.log(result);
const result2 = getArrayParams(1, 2, 3, -100, 10);
console.log(result2);
const result3 = getArrayParams(5);
console.log(result3);



// tusk 2

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    if (element > max){
      max = element;
    }
    if (element < min){
      element = min;
    }

    return element;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

// summElementsWorker
// console.log(summElementsWorker());
// console.log(summElementsWorker(10, 10, 11, 20, 10));

// differenceMaxMinWorker
// console.log(differenceMaxMinWorker()); 
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

// differenceEvenOddWorker
// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

// averageEvenElementsWorker
// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

// tusk 3

function makeWork (arrOfArr, func) {
  let maxWorkerReult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    const workerData = arrOfArr[i];
  

  const workerResult = func(...workerData);

  if (workerResult > maxWorkerReult) {
    maxWorkerReult = workerResult;
  }
 }

 return maxWorkerReult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker));
