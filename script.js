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


// END FUNCTION


btn.forEach((bt) => {
    bt.addEventListener('click', () => {
        if (bt.innerText === 'Clear') {
            input_value.value = '';
        }
        else if (bt.innerText == 'Enter') {
            if ((input_value.value).includes('+')) {
                let number = input_value.value.split('+');
                let result = Add(Number(number[0]),Number(number[1]));
                input_value.value = result;
            }
            else if((input_value.value).includes('-')){
                let number = input_value.value.split('-');
                let result = Subtract(Number(number[0]),Number(number[1]));
                input_value.value = result;
            }
            else if((input_value.value).includes('/')) {
                let number = input_value.value.split('/');
                let result = Division(Number(number[0]),Number(number[1]));
                input_value.value = result;
            }
            else if((input_value.value).includes('x')) {
                let number = input_value.value.split('x');
                let result = Multiply(Number(number[0]),Number(number[1]));
                input_value.value = result;
            }
        }
        else {
            input_value.value += bt.innerText;
        }
    })
})


