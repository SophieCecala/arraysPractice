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

    console.log('MAX ', Math.max(...arr));
    const max = Math.max(...arr);

    for(let i = 0; i < arr.length; i++) {
      if (i % 3 === 2 && arr[i] === max) {
          document.write(`<font style="color: green"><strong>${arr[i]}</strong></font> `);
      }else if(arr[i] === max ){
            document.write(`<font style="color: green">${arr[i]}</font> `);
      }else if (i % 3 === 2 && arr[i] % 3 === 0) {
          document.write(`<font style="color: red"><strong>${arr[i]}</strong></font> `);
      }else if( i % 3 === 2){
         document.write(`<strong>${arr[i]}</strong> `);
     }else if(arr[i] % 3 === 0){
         document.write(`<font style="color: red">${arr[i]}</font> `)
     } else{
         document.write(`${arr[i]} `);
     }
    }

