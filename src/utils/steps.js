const steps = {
    'bubblesort': [
        "0  for(i=0;i<arr.length<i++) {",
        "1      for(j=0;j<arr.length-i;j++) {",
        "2          if(arr[j+1] < arr[j]) {",
        "3              swap(arr[j+1],arr[j])",
        "4          }",
        "5      }",
        "6  }"
    ],
    'selectionsort': [
        "0  for(i=0;i<arr.length<i++) {",
        "1      for(j=0;j<arr.length-i;j++) {",
        "2          if(arr[i] > arr[j]) {",
        "3              swap(arr[i],arr[j])",
        "4          }",
        "4      }",
        "6  }"
    ],
    'mergesort': [
        "0  mergeSort(arr){",
        "1      if (arr.length <= 1) return arr",
        "2      mid = Math.floor(arr.length/2)",
        "3      left = arr.slice(0,mid)",
        "4      right = arr.slice(mid)",
        "5      leftResult = await mergeSort(left)",
        "6      rightResult = await mergeSort(right)",
        "7      return result = merge(leftResult,rightResult)",
        "8  }",
        "10     ",
        "11 merge(sortedArr1,sortedArr2){",
        "12         leftIndex = 0;",
        "13         rightIndex=0;",
        "14         result = []",
        "15         while (leftIndex < sortedArr1.length && rightIndex < sortedArr2.length){",
        "16             if(sortedArr1[leftIndex]<=sortedArr2[rightIndex]){",
        "17                 result.push(sortedArr1[leftIndex])",
        "18                 leftIndex++",
        "19             }else{",
        "20                 result.push(sortedArr2[rightIndex])",
        "21                 rightIndex++",
        "22             }" ,
        "23         }",
        "24         return [...result,...sortedArr1.slice(leftIndex),...sortedArr2.slice(rightIndex)]",
        "25 }"
    ],
    'linearsearch': [
        "0  for(i=0;i<arr.length<i++) {",
        "1      if(arr[i] == search) {",
        "2          return i",
        "3      }",
        "4  }",
        "5  return -1"
    ],
    'binarysearch': [
        "0  while(low <= high) {",
        "1      var mid = Math.floor((low + high) / 2)",
        "2      if(arr[mid] == search) {",
        "3          return mid",
        "4      }",
        "5      if(arr[mid] < search) {",
        "6          low = mid + 1",
        "7      } else {",
        "8          high = mid - 1",
        "9      }",
        "10  }",
        "11  return -1"
    ],
}

export default steps;