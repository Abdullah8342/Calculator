// ACCESSING HTML ELEMENTS

const input_value = document.querySelector('input');
const btn = document.querySelectorAll('button');


// END ACCESSING HTML


// FUNCTIONS

// ADD FUN

function Add(num_1,num_2) {
    return num_1 + num_2;
}

// END ADD FUN

// SUBTRACT FUN
function Subtract(num_1,num_2) {
    return num_1 - num_2;
}

// END SUBTRACT 

// MULTIIYPLY FUN

function Multiply(num_1,num_2) {
    return num_1 * num_2;
}
// END MULTIPLY

// DIVISION FUN

function Division(num_1,num_2) {
    return num_1 / num_2;
}

// END DIVISION

// ACCESSING INPUT 




// END FUNCTION


btn.forEach((bt) => {
    bt.addEventListener('click', () => {
        if (bt.innerText === 'Clear') {
            input_value.value = '';
        }
        else if (bt.innerText == 'Enter') {
            if ((input_value.value).includes('+')) {
                alert('+');
            }
            else if((input_value.value).includes('-')){
                alert('-');
            }
            else if((input_value.value).includes('/')) {
                alert('/');
            }
            else if((input_value.value).includes('x')) {
                alert('x');
            }
        }
        else {
            input_value.value += bt.innerText;
        }
    })
})




// CONSOLE
console.log(Add(5,5)); // OK
console.log(Subtract(5,5)); // OK
console.log(Multiply(5,5)); // OK
console.log(Division(5,5)); // OK
console.log(btn);
console.log(input_value);
// END CONSOLE