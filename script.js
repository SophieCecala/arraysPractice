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

        /*task 2*/
for(let i = 0; i < arr.length; i++){
    if(i % 3 === 2){
       document.write(`  <strong> ${arr[i]} </strong> `);
    }else {
        document.write(` ${arr[i]} `);
    }

}

