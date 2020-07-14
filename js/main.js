const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const IS_INVALID = 'is-invalid';

// {
//  tag: 'h1',
//  attr: {
//     class: 'title',
//  }
// }
const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];

  for (let i=0; i<keys.length;i++) {
    let attr = keys[i];
    attrs.push(`${attr}="${obj[attr]}"`);
  }

  const string = attrs.join()
  return string;
}
// "tag= "h1" class="title""


// {
//  tag: 'h1',
//  attr: {
//     class: 'title',
//  }
// }
const tagAttrs = obj => (content = '') =>
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if ( typeof t === 'string') {
    tagAttrs({tag: t})
  } else {
    tagAttrs(t);
  }
}

const tableRowTag = tag('tr');
// const tableRow = items => tableRowTag(tableCells(items));
const tableRow = items => compose(tableRowTag, tableCells)(items);

const tabeCell = tag('td');
const tableCells = items => item.map(tableCell).join('');


const description = document.getElementById('description');
const calories = document.getElementById('calories');
const carbs = document.getElementById('carbs');
const proteins = document.getElementById('proteins');

let list = [];

const add = () => {
  const newItem={
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    proteins: parseInt(proteins.value),
  }

  list.push(newItem);
  console.log(list);
  cleanInputs();
  updateTotals()
}

const updateTotals = () => {
  let calories = 0, carbs = 0, proteins=0;
  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    proteins += item.proteins
  });

  document.getElementById('totalCalories').textContent =  calories;
  document.getElementById('totalCarbs').textContent = carbs;
  document.getElementById('totalProteins').textContent = proteins;
};

const cleanInputs = () => {
  description.value='';
  calories.value='';
  carbs.value = '';
  proteins.value = '';
}

const validateInputs = () => {
  description.value ? '' : description.classList.add(IS_INVALID);
  calories.value ? '' : calories.classList.add(IS_INVALID);
  carbs.value ? '' : carbs.classList.add(IS_INVALID);
  proteins.value ? '' : proteins.classList.add(IS_INVALID);

  if(description.value && calories.value && carbs.value && proteins.value){
    add()
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
