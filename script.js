// get input element and calculate button element
const ropeLengthsInput = document.getElementById("ropeLengths");
const calculateCostButton = document.getElementById("calculateCost");
const resultDiv = document.getElementById("result");

// add event listener to button
calculateCostButton.addEventListener("click", calculateCost);

// function to calculate the minimum cost of ropes
function calculateCost() {
  // get rope lengths as an array of integers
  const ropeLengths = ropeLengthsInput.value.split(",").map(Number);

  // sort rope lengths in non-decreasing order
  ropeLengths.sort((a, b) => a - b);

  // initialize total cost and temp cost variables
  let totalCost = 0;
  let tempCost = 0;

  // combine ropes until there is only one rope left
  while (ropeLengths.length > 1) {
    // get the two smallest ropes
    const smallestRope = ropeLengths.shift();
    const secondSmallestRope = ropeLengths.shift();

    // add their lengths together
    tempCost = smallestRope + secondSmallestRope;

    // add the temporary cost to the total cost
    totalCost += tempCost;

    // add the combined rope length to the array
    ropeLengths.push(tempCost);

    // sort the array again
    ropeLengths.sort((a, b) => a - b);
  }

  // display the minimum cost in the result div
  resultDiv.textContent = "Minimum cost of ropes: " + totalCost;
}
