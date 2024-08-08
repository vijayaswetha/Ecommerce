// Initialize the number
let count = 0;

// Function to update the number
function updateNumber() {
    count++;
    document.getElementById("number").textContent = count;

    // Stop the interval when count reaches 500
    if (count === 50) {
        clearInterval(intervalId);
    }
}

// Update the number every second
const intervalId = setInterval(updateNumber, 10);


let count1 = 0;

// Function to update the number
function updateNumber1() {
    count1++;
    document.getElementById("number1").textContent = count1;

    // Stop the interval when count reaches 500
    if (count1 === 500) {
        clearInterval(intervalId1);
    }
}

// Update the number every second
const intervalId1 = setInterval(updateNumber1, 10);


let count2 = 0;

// Function to update the number
function updateNumber2() {
    count2++;
    document.getElementById("number2").textContent = count2;

    // Stop the interval when count reaches 500
    if (count2 === 50) {
        clearInterval(intervalId2);
    }
}

// Update the number every second
const intervalId2 = setInterval(updateNumber2, 10);




let count3 = 0;

// Function to update the number
function updateNumber3() {
    count3++;
    document.getElementById("number3").textContent = count3;

    // Stop the interval when count reaches 500
    if (count3 === 97) {
        clearInterval(intervalId3);
    }
}

// Update the number every second
const intervalId3 = setInterval(updateNumber3, 10);









  
  
  