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

// function counter() {
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// let first = counter();
// console.log(first()); 
// console.log(first()); 
// console.log(first()); 

// рекурсия
// let x = 0;
// function rec(){
//     if(x <= 10){
//         console.log(x++);
//         rec()
//     }
// }
// rec();

// let arrNums = [1, 2, 3, 4];
// let i = 0;
// function rec(arr, sum){
//     i++
//     console.log(`Функция ${i} началась`);
//     sum += arr.shift();
//     if(arr.length != 0){
//         sum = rec(arr, sum)
//     }
//     console.log(`Функция ${i} завершилась`);
//     i--
//     return sum
// }
// console.log(rec(arrNums, 0));

// в этом случае лучше пройтись циклом.

let arrNums = [1, 2, 3, 4];
let sum = 0;
for(let i = 0; i < arrNums.length; i++){
    console.log(`${i} круг`);
    sum += arrNums[i]
}
console.log(sum);
