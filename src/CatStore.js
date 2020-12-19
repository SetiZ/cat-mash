const data = {
  cats: [],
};

export function fetchCats() {
  return fetch("http://localhost:3000/cats")
  .then(res => res.json())
  .then(
    (result) => {
      data.cats = Object.values(result);
    }
  )
}

export function getCats() {
  return data.cats;
}

export function getRandomCats() {
  
  const result = data.cats.slice(0, 2).map(() => { 
    return data.cats.splice(Math.floor(Math.random() * data.cats.length), 1)[0];
  }, data.cats.slice());
  console.log(result)
  return result
  // return data.cats[Math.floor(Math.random()*data.cats.length)];
}

// export function updateCat(id) {
//   return fetch(`http://localhost:3000/cats/${id}`, {
//     method: 'PUT',
//   }).then(
//     (result) => {
//       data.cats = result;
//     }
//   )
// }