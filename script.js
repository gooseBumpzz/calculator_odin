const keyboard = document.getElementById("keyboard");
const screenFormula = document.getElementById("screenFormula");
const screenResult = document.getElementById("screenResult");


function add (num1, num2){
    return screenResult.textContent = num1 + num2;
};

function subtract (num1, num2){
    return screenResult.textContent = num1 - num2;
};

function multiply (num1, num2){
    return screenResult.textContent =num1*num2;
}

function divide(num1, num2){
    return screenResult.textContent =num1/num2;
}

//perform operation based on operator
function operate (num1, num2, operator){
    if (operator == "+" ){
        return add(+num1, +num2);
    }
    else if (operator == "-"){
        return subtract (+num1,+num2)
    }
    else if (operator == "x"){
        return multiply (+num1,+num2)
    }
    else if (operator == "/"){
        return divide (+num1,+num2)
    }
}

// building 4x4 grid
const keys = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3" ,"-", "0", "del", "=", "+"];
const numKeys =["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operatorKeys = ["/", "x", "-", "del", "=", "+"];
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
        // make a string out of clicked buttons
        if (!operatorKeys.includes(keyValue)){
            num1 += keyValue;
            tempArray.push(num1);
        }
        // adds the first number to empty array of numbers
        if (keyValue == "+"){;
            //tempArray.push(num1);
            operator = "+";
            //when click "+" second time it calculates result same as "="
            if (tempArray.length == 2){
                result = operate(tempArray[0], tempArray[1], operator);
                tempArray =[];
                tempArray.push(result);
            }
            num1 = '';  
        }

        else if (keyValue == "-"){;
            //tempArray.push(num1);
            operator = "-";
            //when click "-" second time it calculates result same as "="
            if (tempArray.length == 2){
                result = operate(tempArray[0], tempArray[1], operator);
                tempArray =[];
                tempArray.push(result);
            }
            num1 = '';  
        }

        else if (keyValue == "x"){;
            //tempArray.push(num1);
            operator = "x";
            //when click "x" second time it calculates result same as "="
            if (tempArray.length == 2){
                result = operate(tempArray[0], tempArray[1], operator);
                tempArray =[];
                tempArray.push(result);
            }
            num1 = '';  
        }

        else if (keyValue == "/"){;
            //tempArray.push(num1);
            operator = "/";
            //when click "/" second time it calculates result same as "="
            if (tempArray.length == 2){
                result = operate(tempArray[0], tempArray[1], operator);
                tempArray =[];
                tempArray.push(result);
            }
            num1 = '';  
        }

        if (keyValue == "=") {
            tempArray.push(num1);
            // num2 = num1.slice(0,-1);
            // tempArray.push(num2);
            result =operate(tempArray[0], tempArray[1], operator);
            tempArray =[];
            tempArray.push(result);
            num1 ="";
        } 

        console.log("num1 is "+num1);
        console.log("operator is "+operator);
        console.log("num2 is "+num2); 
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



// // adds a number to empty array of numbers
// if (keyValue == "+"){;
//     tempArray.push(num1);
//     operator = "+";
    

//     //working on subtraction! but only after u used sum
//     if (keyValue == "-") {
//         tempArray.push(num1);
//         operator = "-";
//     }
//     // doesn't work NaN
//     if (keyValue == "x") {
//         tempArray.push(num1);
//         operator = "*";
//     }

//     if (tempArray.length == 2){
//         result = operate(tempArray[0], tempArray[1], operator);
//         tempArray =[];
//         tempArray.push(result);
//     }
//     num1 = '';  
//     console.log(operator);
// }

// if (keyValue == "=") {
//     num2 = num1.slice(0,-1);
//     tempArray.push(num2);
//     result =operate(tempArray[0], tempArray[1], operator);
//     tempArray =[];
//     tempArray.push(result);
//     num1 ="";
// } 