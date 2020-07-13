function buildSum(a){
  return function(b){
    return b + a
  }
}

const addFive = buildSum(5);
console.log(addFive(5)); //10


const buildSum = a => b => b + a;
console.log(buildSum(5)(5))