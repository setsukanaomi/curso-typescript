function multiply3(num1: number, num2: number): number {
  return num1 * num2;
}

function Sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven3(num: number): boolean {
  return num % 2 === 0;
}

function showResult3(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}
