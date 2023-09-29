// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");

// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


// let password = "";
// let passwordLength = 10;
// let checkCount = 0;


// //set password length
// handleSlider();
// function handleSlider(){
//     inputSlider.value = passwordLength;
//     lengthDisplay.innerText = passwordLength; 
// };

// function setIndicator(color){
//     indicator.style.backgroundcolor = color;
// }

// function getRndInteger(min, max){
//     return Math.floor(Math.random() * (min - max)) + min;
// }
// function generateRandomNumber(){
//     return getRndInteger(0, 9);
// }
// function generateLowerCase(){
//     return String.fromCharCode(getRndInteger(97, 123));
// }



// function generateUpperCase(){
//     return String.fromCharCode(getRndInteger(65, 91));
// }
// function generateSymbols(){
//     const randNum = getRndInteger(0, symbols.length);
//     return symbols.charAt(randNum);
// }

// function calcStrength(){
//     let hasUpper=false;
//     let hasLower= false ;
//     let hasNumbers = false;
//     let hasSymbol = false;

//     if(uppercaseCheck.checked) hasUpper = true;
//     if(lowercaseCheck.checked )hasLower =true;
//     if(numbersCheck.checked) hasNumbers = true;
//     if(symbolsCheck.checked) hasSymbol = true;
//     if(hasUpper && hasLower && (hasNumbers || hasSymbol) && passwordLength >=8){
//         setIndicator("#0f0");
//     } else if (
//       (hasLower || hasUpper) &&
//       (hasNumbers || hasSymbol) &&
//       passwordLength >= 6
//     ) {
//       setIndicator("#ff0");
//     } else {
//       setIndicator("#f00");
//     }
// }


// async function copyContent(){
//     try{
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copyMsg.innerText = "Copied";

//     }
//     catch(e){
//         copyMsg.innerText = "Failed";

//     }
//     copyMsg.classList.add("active");
//     setTimeout(()=>{
//         copyMsg.classList.remove("active");
//     },2000);
// }

// function shufflePassword(array) {
//     //Fisher Yates Method
//     for (let i = array.length - 1; i > 0; i--) {
//         //random J, find out using random function
//         const j = Math.floor(Math.random() * (i + 1));
//         //swap number at i index and j index
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;
// }
    
// function handleCheckBoxChange(){
//     checkCount = 0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//         checkCount++;
//     });


//     if(passwordLength < checkCount)
//     passwordLength = checkCount;
//     handleSlider();
// }

// allCheckBox.forEach((checkbox) => {
//     checkbox.addEventListener('change', handleCheckBoxChange);
// })

    
// inputSlider.addEventListener('input', (e) => {
//     passwordLength = e.target.value;
//     handleSlider();
// })

// copyBtn.addEventListener('click', () => {
//     if(passwordDisplay.value)
//     copyContent();
// })




// // generateBtn.addEventListener('click',() => {
// //     if(checkCount ==0) return;
// //     if(passwordLength < checkCount)
// //     passwordLength = checkCount;
// //     handleSlider();

// //     //lets start to find the journey new password
// //     //remove old password
// //     console.log("Starting the Journey");


// //     password = "";

// //     // if(uppercaseCheck.checked){
// //     //     password+= generateUpperCase();
// //     // }
// //     // if(lowercaseCheck.checked){
// //     //     password+= generateLowerCase();
// //     // }
// //     // if(numbersCheck.checked){
// //     //     password+= generateRandomNumber();
// //     // }
// //     // if(symbolsCheck.checked){
// //     //     password+= generateSymbols();
// //     // }
// //     // let funcarr= [];

// //     // if(uppercaseCheck.checked)
// //     // funcarr.push(generateUpperCase);

// //     // if(lowercaseCheck.checked)
// //     // funcarr.push(generateLowerCase);

// //     // if(numbersCheck.checked)
// //     // funcarr.push(generateRandomNumber);

// //     // if(symbolsCheck.checked)
// //     // funcarr.push(generateSymbols);

// //     // Initialize an array to store valid functions
// // let funcarr = [];

// // if (uppercaseCheck.checked) {
// //     funcarr.push(generateUpperCase);
// // }

// // if (lowercaseCheck.checked) {
// //     funcarr.push(generateLowerCase);
// // }

// // if (numbersCheck.checked) {
// //     funcarr.push(generateRandomNumber);
// // }

// // if (symbolsCheck.checked) {
// //     funcarr.push(generateSymbols);
// // }

// // // for (let i = 0; i < passwordLength - funcarr.length; i++) {
// // //     let randIndex = getRndInteger(0, funcarr.length - 1);
// // //     password += funcarr[randIndex]();
// // // }







// //     for(let i=0; i<funcarr.length;i++)
// //     password += funcarr[i]();
// //     console.log("COmpulsory adddition done");

// //     // for(let i=0; i<funcarr.length; i++) {
// //     //     password += funcarr[i]();
// //     // }
// //     // // console.log("COmpulsory adddition done");

// //     // for(let i=0; i<passwordLength-funcarr.length; i++) {
// //     //     let randIndex = getRndInteger(0 , funcarr.length);
// //     //     console.log("randIndex" + randIndex);
// //     //     password += funcarr[randIndex]();

// //     // }
// //     if (funcarr.length > 0) {
// //         for (let i = 0; i < passwordLength - funcarr.length; i++) {
// //             let randIndex = getRndInteger(0, funcarr.length - 1);
// //             password += funcarr[randIndex]();
// //         }
// //     }
    
    

// //     console.log("Remaining adddition done");

// //     password = shufflePassword(Array.from(password));
// //     console.log("Shuffling done");
// //     passwordDisplay.value = password;
// //     console.log("UI adddition done");


// //     calcStrength();

    
// // });

// funcarr=[];

// generateBtn.addEventListener('click', () => {
//     if (checkCount === 0) return;
//     if (passwordLength < checkCount) passwordLength = checkCount;
//     handleSlider();

//     // ... (other code)

//     password = "";

//     // Ensure funcarr is properly populated
//     console.log("funcarr: ", funcarr);

//     for (let i = 0; i < passwordLength - funcarr.length; i++) {
//         let randIndex = getRndInteger(0, funcarr.length - 1);
//         console.log("randIndex: " + randIndex);
//         console.log("funcarr[randIndex]: " + funcarr[randIndex]);

//         if (typeof funcarr[randIndex] === "function") {
//             password += funcarr[randIndex]();
//         }
//     }

//     password = shufflePassword(Array.from(password));
//     console.log("Shuffling done");
//     passwordDisplay.value = password;
//     console.log("UI adddition done");


//     calcStrength();


//     // ... (other code)
// });









// new code


const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 0;
setIndicator("#ccc");// set password length
handleSlider();
function handleSlider() {
    passwordLength = inputSlider.value;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return String(getRndInteger(0, 10));
}

function generateLowerCase() {
    const code = getRndInteger(97, 123);
    return String.fromCharCode(code);
}

function generateUpperCase() {
    const code = getRndInteger(65, 91);
    return String.fromCharCode(code);
}

function generateSymbols() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}


function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRndInteger(0, i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    });

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

inputSlider.addEventListener('input', (e) => {
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
});

generateBtn.addEventListener('click', () => {
    if (checkCount === 0) return;

    password = "";
    let funcarr = [];

    if (uppercaseCheck.checked) {
        funcarr.push(generateUpperCase);
    }
    if (lowercaseCheck.checked) {
        funcarr.push(generateLowerCase);
    }
    if (numbersCheck.checked) {
        funcarr.push(generateRandomNumber);
    }
    if (symbolsCheck.checked) {
        funcarr.push(generateSymbols);
    }

    if (funcarr.length === 0) return; // Ensure there are functions to generate from

    for (let i = 0; i < passwordLength; i++) {
        const randIndex = getRndInteger(0, funcarr.length);
        password += funcarr[randIndex]();
    }

    password = shufflePassword(password.split(''));
    passwordDisplay.value = password;

    calcStrength();
});

// Initial setup
handleSlider();
// calcStrength();
