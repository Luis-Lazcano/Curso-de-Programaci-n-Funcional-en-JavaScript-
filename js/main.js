const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const IS_INVALID = 'is-invalid';

const description = document.getElementById('description');
const calories = document.getElementById('calories');
const carbs = document.getElementById('carbs');
const proteins = document.getElementById('proteins');

const validateInputs = () => {
  description.value ? '' : description.classList.add(IS_INVALID);
  calories.value ? '' : calories.classList.add(IS_INVALID);
  carbs.value ? '' : carbs.classList.add(IS_INVALID);
  proteins.value ? '' : proteins.classList.add(IS_INVALID);

  if(description.value && calories.value && carbs.value && proteins.value){
    console.log('OK')
  }

}

description.addEventListener('keydown', () => {
  description.classList.remove(IS_INVALID);
});
calories.addEventListener('keydown', () => {
  calories.classList.remove(IS_INVALID);
});
carbs.addEventListener('keydown', () => {
  carbs.classList.remove(IS_INVALID);
});
proteins.addEventListener('keydown', () => {
  proteins.classList.remove(IS_INVALID);
});