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

    const fruits = ["banana", "watermelon", "strawberry", "lemon", "pineapple", "kiwi", "mango"];


    let maxLength = 0;
    let longestFruit;
    let shorterFruit;
    let shortestFruit;

    for(let i = 0; i < fruits.length; i++) {
        if(fruits[i].length > maxLength ){
            maxLength = fruits[i].length;
            longestFruit = fruits[i];
        }
    }
    // document.write(longestFruit);
    // document.write(' \n');

    const shorterFruits = fruits.filter(fruit => fruit.length < maxLength);

    let maxShorterLenght = 0;

    for(let i = 0; i < shorterFruits.length; i++){
        if(shorterFruits[i].length > maxShorterLenght){
            maxShorterLenght = shorterFruits[i].length;
            shorterFruit = shorterFruits[i];
        }
    }
    // document.write(shorterFruit);
    // document.write(' \n');

    let minimumLength = maxLength;

    for(let i = 0; i < fruits.length; i++) {
        if(fruits[i].length < minimumLength){
            minimumLength = fruits[i].length;
            shortestFruit = fruits[i];
        }
    }
    // document.write(shortestFruit);

    const fruits6 = ["banana", "watermelon", "strawberry", "lemon", "pineapple", "kiwi", "mango"];

    for(let i = 0; i < fruits6.length; i++) {
        if(fruits6[i].length < 5){
            fruits6.splice(i, 1)
        }
    }
    // document.write(' \n');
    // document.write(fruits6);


    let fruit = ["banana", "lemon", "mango", "apple", "pineapple"];
    let berry = ["strawberry", "blackberry", "blueberry", "cranberry", "gooseberry"];

    let merge = fruit.concat(berry);
    merge.sort();

    document.write(merge);


    let guestlist = prompt("");