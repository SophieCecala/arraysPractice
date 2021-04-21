    /*task 1 */
function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const arrLenght = prompt("write a number");

    const arr = [];

    for(let i = 0; i < arrLenght; i++){
        arr[i] = getRandomArbitrary(-100, 100);
    }

//document.write(arr);

        /*task 2, 3, 4 */
    let max = -Infinity;

 for(let i = 0; i < arr.length; i++) {

     if (arr[i] % 3 === 0) {
         document.write `<font style="color: red"> ${arr[i]} </font>`
     } else if (arr[i] % 3 === 2) {
         document.write(`  <strong> ${arr[i]} </strong> `);
     } else {
         document.write(` ${arr[i]} `);
     }
     if(arr[i] > max){
         max = arr[i];
     }else{
         document.write(`<font style="color: green"> ${max} </font>`)
     }
 }
