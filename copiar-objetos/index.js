//Primitivos
let a = 1;
let b = a;

console.log(a,b); //1 1
b+=1;
console.log(a,b); //1 2


//object
const car = {
  color: 'red',
  year: 2020,
  km: 0,
}

const newCar = car;

console.log(car, newCar); //Iguales
newCar.year = 2021;
console.log(car, newCar); //Iguales aún



//Copiar Valores
const car = {
  color: 'red',
  year: 2020,
  km: 0,
}

// const nerCar = Object.assign(De Donse se Copian, De Donde se Extraen Valores)
const newCar = Object.assign({}, car);

console.log(car, newCar); //Iguales
newCar.year= 2021;
console.log(car, newCar); //Solo cambia newCar


//Objetos anidados
const car = {
  color: 'red',
  year: 2020,
  km: 0,
  owner: {
    name: 'David',
    age: 25,
  }
}

const newCar = Object.assign({}, car);
console.log(car, newCar); //Son iguales

newCar.owner.name = 'Luis';

console.log(car, newCar); //Siguen siedno iguales


//JSON.parse() JSON.stringify();
const car = {
  color: 'red',
  year: 2020,
  km: 0,
  owner: {
    name: 'David',
    age: 25,
  }
}

const newCar = JSON.parse(JSON.stringify(car));
console.log(car, newCar); //Son iguales
newCar.owner.name = 'Luis';
console.log(car, newCar); //Solo cambia el segundo objeto

