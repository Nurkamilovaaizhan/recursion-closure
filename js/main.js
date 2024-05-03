// Замыкание

// через глобальную переменную

// let count = 0;
// function counter(){
//     count++
//     return count
// }
// counter();
// counter();
// console.log(counter());

function counter() {
    let count = 0;
    return function(){
        count++
        return count
    }
}
let first = counter();
console.log(first()); 
console.log(first()); 
console.log(first()); 
