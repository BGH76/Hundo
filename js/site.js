// Get values from page
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    if(endValue > 100){
        endValue = 100;
    }
    let number = [];
    
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    // validate input
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        number = generateNumber(startValue, endValue);
        displayNumbers(number);
    }
    else {
        alert("Must enter numbers");
    }
}

// Generate numbers from startvalue to the endvalue
function generateNumber(start, end) {
    let number = [];
    for (let idx = start; idx <= end; idx++) {
        number.push(idx);
    }
    return number;
}

// Display the numbers and mark even number bold
function displayNumbers (numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
      let className = "even";  
      let number = numbers[index];
      if (number % 2 == 0) {
        className = "even";
      }
      else {
        className = "odd";
      }
      // This will not display correctly in Prism. See source code for full detail.
      templateRows += `<tr><td class="${className}">${number}</td></tr>`;  
    }
    document.getElementById("results").innerHTML = templateRows;
}
