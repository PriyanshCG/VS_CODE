//191
function binary(arr, k) {
  let i = 0;
  let j = arr.length;
  while (j >= i) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] > k) {
      j = mid - 1;
    }
    else if (arr[mid] < k) {
      i = mid + 1;
    }
    else {
      console.log(mid);
      return;
    }
  }
  console.log(-1);
}

binary([1, 2, 3, 4, 5], 4)



//192
function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 2, 2, 3], 2));
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3], 4));




//with binary search method

function countOccurrences(arr, target) {
  return upperBound(arr, target) - lowerBound(arr, target);
}

function lowerBound(arr, target) {
  let low = 0, high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function upperBound(arr, target) {
  let low = 0, high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

console.log(countOccurrences([1, 2, 2, 2, 3], 2));
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3], 4));


//slightly diffrent way
function CountOccurences(arr, element) {
  let left = null;
  let right = null;

  let i = 0;
  let j = arr.length - 1;

  while (j >= i) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] == element) {
      left = mid;
      j = mid - 1
    }
    else if (arr[mid] > element) {
      j = mid - 1;
    }
    else {
      i = mid + 1;
    }
  }

  i = 0;
  j = arr.length - 1;

  while (j >= i) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] == element) {
      right = mid;
      i = mid + 1;
    }
    else if (arr[mid] > element) {
      j = mid - 1;
    }
    else {
      i = mid + 1
    }
  }
  let result = right - left + 1;
  console.log(result);

}

CountOccurences([1, 2, 3, 4, 5, 7, 7, 7, 7, 7, 8, 9, 11, 13]);



//193
function hasTripletSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(hasTripletSum([1, 2, 3, 4, 5], 9));    
console.log(hasTripletSum([1, 1, 1], 4));         
console.log(hasTripletSum([0, -1, 2, -3, 1], 0));  



//194
function hasTripletSum(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    return true;
                }
            }
        }
    }
    return false;
}
console.log(hasTripletSum([1, 2, 3, 4, 5], 9));      
console.log(hasTripletSum([1, 1, 1], 4));       
console.log(hasTripletSum([0, -1, 2, -3, 1], 0));   
