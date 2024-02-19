// function addArray (arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum+= +element; // + means covert to int
//     });
//     return sum;
// }
// console.log(addArray([6,4,5]));
const keyboard = document.getElementById("keyboard");
const screenFormula = document.getElementById("screenFormula");
const screenResult = document.getElementById("screenResult");
const addOper = "+";
const subOper = "-";
const mulOper = "*";
const divOper = "/";
// let num1 = 0;
// let num2 = 0;
// let operator = "";

function add (num1, num2){
    return screenResult.textContent = num1 + num2;
};

function subtract (num1, num2){
    return screenResult.textContent =num1 - num2;
};

function multiply (num1, num2){
    return screenResult.textContent =num1*num2;
}

function divide(num1, num2){
    return screenResult.textContent =num1/num2;
}

function operate (num1, num2, operator){
    if (operator === addOper ){
        return add(+num1, +num2);
    }
    else if (operator = subOper){
        return subtract (num1,num2)
    }
}

// building 4x4 grid
const keys = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3" ,"-", "0", "del", "=", "+"];
const numPad =["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operPad = ["/", "x", "-", "del", "=", "+"];
function keyGrid (itemCount){
    for (let i = 0; i < itemCount; i++) {
        const keyItem = document.createElement('div');
        keyItem.className = 'key-item';
        keyItem.id = keys[i];
        keyItem.textContent = keys[i];        
        keyboard.appendChild(keyItem);
    }
}
keyGrid(16);

// iterating over each keyboard item, add "click" event
const keyItems = document.getElementsByClassName("key-item");

let num1 = "";
let num2 = "";
let operator = "";
let tempArray = [];
let result = 0;
for (let i = 0; i < keyItems.length; i++) {
    const key = keyItems[i];
    key.addEventListener("click", (event) => {
        let keyValue = key.textContent;

        // show full Formula on screen
        let formula = screenFormula.textContent += keyValue;

        //take two numbers and perform operation
        if (keyValue != "+"){
            num1 += keyValue;
        }
        if (keyValue == "+"){;
            tempArray.push(num1);
            operator = "+";
        

            //working on subtraction! but only after u used sum
        if (keyValue == "-") {
            tempArray.push(num1);
            operator = "-";
        }
            if (tempArray.length == 2){
                result = operate(tempArray[0], tempArray[1], operator);
                tempArray =[];
                tempArray.push(result);
            }
            num1 = '';  
        }

        if (keyValue == "=") {
            num2 = num1.slice(0,-1);
            tempArray.push(num2);
            result =operate(tempArray[0], tempArray[1], operator);
            tempArray =[];
            tempArray.push(result);
            num1 ="";
        } 

        console.log("num1= "+num1);
        console.log("operator = "+operator);
        console.log("num2= "+num2); 
        console.log("temp array is "+tempArray);

        });    
      
}



// changing color of "=" button
const selectEqual= document.getElementById('=');
selectEqual.style.backgroundColor = 'rgb(234, 183, 55)';


// let str = "66+5";
// let newStr = str.replaceAll("+", " ");
// let newStr1= newStr.split(" ");
// console.log(newStr1);

// let text = "Please locate where 'locate' occurs!";
// let index = text.search("+");
// console.log(index);

// if (keyValue === "+"){
            //     let stripped = formula.replaceAll("+", " ").split(" ");
            //     console.log(add(stripped));
            // }
            // else if (keyValue == "-"){
            //     stripped = formula.replaceAll("-", " ").split(" ");
            //     console.log(stripped);
            // }

            //strip "+" from a string and covert to array of numbers
            //let stripped = formula.replaceAll("+", " ").split(" ");
            
           
           // console.log(stripped);