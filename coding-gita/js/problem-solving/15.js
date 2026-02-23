//Q180
function sumEven(arr){
    let sum = arr.reduce((current , next)=>{
        if(next%2 == 0){
            return current+next;
        }
        else{
            return current;
        }
    },0)
    console.log(sum);
}
sumEven([1,2,3,4,5])

// Q182. Swap Elements at Indices i and j

function swapIdx(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

// INBUILT METHOD
function swapIdxBuilt(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

// Q183. Rotate Array Right by k Positions

function rotateRight(arr, k) {
   for(let i=1;i<=k;i++){
    let add=arr.pop();
    arr.unshift(add);
   }
   console.log(arr);
   
}
rotateRight([1,2,3,4,5],3);

// other method
function rotate(arr,k){
    let res = [];
    if(k>arr.length){
        k=k%arr.length;
    }

    for(let i = arr.length-k; i<arr.length;i++){
        res.push(arr[i]);
    }
    for(let i = 0; i<arr.length-k; i++){
        res.push(arr[i])
    }
    return res;

}

console.log(rotate([1, 2, 3, 4, 5],1));
console.log(rotate([1, 2, 3, 4, 5],2));
console.log(rotate([1, 2, 3],5));




//184
function rotateLeft(arr, k) {
  let n = arr.length;
  k = k % n;

  let res = [];

  for (let i = k; i < n; i++) {
    res.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    res.push(arr[i]);
  }

  return res;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 1)); 
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); 
console.log(rotateLeft([1, 2, 3], 5));     


//185
function merge(arr1,arr2){
    let i=0;
    let j=0;
    let res=[]
   while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++
        }
        else{
            res.push(arr2[j])
            j++
        }
   }
   while(i<arr1.length){
    res.push(arr1[i]);
    i++
   }
   while(j<arr2.length){
    res.push(arr2[j]);
    j++
   }
   console.log(res)

}
merge([1,9,11],[6,8,12]);



//186
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 1, 4, 2]));
console.log(bubbleSort([5, 5, 5]));    
console.log(bubbleSort([-1, 3, 0])); 



//187
function selectionSort(arr) {
    let n = arr.length;

    for (let i = n - 1; i > 0; i--) {
        let maxIndex = 0;

        for (let j = 1; j <= i; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([3, 1, 4, 2]));  
console.log(selectionSort([10, -1, 2]));    
console.log(selectionSort([5]));            


//188
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort([3, 1, 4, 2]));    
console.log(insertionSort([10, -1, 2]));      
console.log(insertionSort([5, 4, 3, 2, 1]));   
console.log(insertionSort([5, 4, -22, 22, -1]));   



//189
function kthSmallest(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    if (k > arr.length || k <= 0) {
        return null;
    }

    return arr[k - 1];
}
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallest([1, 2, 3], 1));          
console.log(kthSmallest([5, 5, 5], 2));         



//190
function kthLargest(arr, k) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

   return arr[k - 1];
}

console.log(kthLargest([7, 10, 4, 3, 20, 15], 2)); 
console.log(kthLargest([1, 2, 3], 1));          
console.log(kthLargest([5, 5, 5], 3));          
