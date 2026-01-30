let array = [1, 2, 3, 4, 5, 6, 7, 8];

const letter = ["a", "b", "c", "d", "e"];

// console.log(array);

/* 
// Recorrer el array con el metodo for
for(let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}; 

for(let i = 0; i < letter.length; i++) {
    console.log(`letra: ${letter[i]}`);
};
*/

// Recorrer el array con el metodo forEach
array.forEach(element => console.log(element));

letter.forEach(element => console.log(`letra: ${element}`));