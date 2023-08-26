function bubbleSort(arr) {
    const len = arr.length; //
  
    for (let i = 0; i < len; i++) { // main loop
      for (let k = 0; k < len - 1; k++) { // inner loop for comparing adjacent elements
        if (arr[k] > arr[k + 1]) { // comparing current element with next
          // Swap elements
          const temp = arr[k]; // temp variable for storing swap result
          arr[k] = arr[k + 1]; // change current element to next
          arr[k + 1] = temp; // change current element to temp
        }
      }
    }
  
    return arr; // sorted array
  }
  

  const input = prompt("Введите числа через запятую: Например: 7, 10, 2, 5");
  const unsortedArray = input.split(",").map(Number);
  console.log(`Массив до сортировки: ${unsortedArray}`);
  const sortedArray = bubbleSort(unsortedArray); // calling bubbleSort function
  console.log(`Массив после сортировки: ${sortedArray}`);  // sorted array
  