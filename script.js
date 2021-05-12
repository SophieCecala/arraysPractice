    /*task 1 */
// function getRandomArbitrary(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     }
//
//     const arrLenght = prompt("write a number");
//
//     const arr = [];
//
//     for(let i = 0; i < arrLenght; i++){
//         arr[i] = getRandomArbitrary(-100, 100);
//     }
//
//
//     console.log('MAX ', Math.max(...arr));
//     const max = Math.max(...arr);
//
//
//     let num = 0;
//     for(let i = 0; i < arr.length; i++){
//         num = arr[i];
//         if (i % 3 === 2){
//             num =  `<strong>${num}</strong> `
//         }
//         if (arr[i] === max){
//             num = `<font style="color: green">${num}</font> `
//         }
//         if (i % 3 === 0){
//             num = `<font style="color: red">${num}</font> `
//         }
//         if (arr[i] < 0){
//             num = `<ins> ${num}</ins> `
//         }
//         if (arr[i] < 10 && arr[i] > -10){
//             num = `<i> ${num}</i> `
//         }
//         document.write(num)
//     }

    const fruits = ["banana", "watermelon", "strawberry", "lemon", "ananas", "kiwi", "mango"];

    let maxLength = 0;

    for(let i = 0; i < fruits.length; i++) {
        if(fruits[i].length > maxLength ){
            maxLenght = fruits[i].length;
        }

    }
    document.write(maxLength);