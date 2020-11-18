// Completar las siguientes preguntas utiliando este arreglo:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Crear un arreglo usando forEach que muestre todos los usuarios con un "!"
let newArray = [];
array.forEach( user => {
  let {username} = user;
  username = username + "!";
  newArray.push(username);
});
console.log(newArray);

// Crear un arreglo usando map que tenga todos los usuarios con un "?" 
const mapArray = array.map(user => {
  let {username} = user;
  return username + "?";
});
console.log(mapArray);

// Filtrar el arreglo incluyendo solo los usuarios que sean del equipo rojo
const filterArray = array.filter(user => user.team === "red");
console.log(filterArray);

// Encontrar el score total de todos los usuarios usando reduce
const reduceArray = array.reduce((count, user) => {
  return count += user.score;
}, 0);
console.log(reduceArray);

// BONUS: Crear una nueva lista con toda la informacion de los usuarios, pero agregar "!" al final de cada item 
const bonusArray = array.map(user =>{
  user.items=user.items.map(item=> item + "!");
  return user;
});
console.log(bonusArray);