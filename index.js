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
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;

let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}