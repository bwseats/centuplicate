
// get user input from fields
// controller function
function getValues() {
    
    // get values
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // parse inputs as numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // verify inputs are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        // if so, generate numbers
        let numbersArray = generateNumbers(startValue, endValue);
    
        // display on page
        displayNumbers(numbersArray);

    } else {
        
        // else, notify user

        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed'
            }
        );
    }
}

// generate numbers in that range
// logic function
function generateNumbers(start, end) {

    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

// display results
// view function
function displayNumbers(numbersArray) {
    let tableBody = document.getElementById('results');

    let tableHTML = "";

    for (let i = 0; i < numbersArray.length; i++) {
        let value = numbersArray[i];
        let className = value % 2 == 0 ? 'even' : 'odd';

        if (i % 5 == 0) {
            tableHTML += '<tr>'
        }
        
        let tableRow = `<td class="${className}">${value}</td>`;


        tableHTML += tableRow

        if ((i + 1) % 5 == 0) {
            tableHTML += '</tr>'
        }
    }

    tableBody.innerHTML = tableHTML;
}