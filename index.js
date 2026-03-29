//Random number generator
/* NOTES
let randomNum = Math.floor(Math.random() * 6) + 1; //This function utilises the Math function "Random", 
                                // to generate random numbers. (Between 0 - 1)
                                //For the example here, we used a die (1 - 6)
                                // We multiple play Math.Random by 6 in order to get numbers between
                                // 1 - 6 exclusively. To remove the decimals, 
                                // we just used a another Math function "Round" to round down the number
                                // we add the 1 to move the starting post from 0 - 5 to 1 - 6

console.log(randomNum);
*/
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");



const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}