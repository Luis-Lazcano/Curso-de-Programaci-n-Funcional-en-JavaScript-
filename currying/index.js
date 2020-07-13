//closures
const buildSum = a => b => a + b;
const tag = t => content => `<${t}>${content}</${t}>`

// without currying
function sumThreeNumber(a,b,c) {
  return a + b + c;
}
console.log(sumThreeNumber(1,2,3)); //6

// with currying
const sumThreeNumber = a => b => c => {
  return a + b + c;
}
console.log(sumThreeNumber(1)(2)(3)); //6