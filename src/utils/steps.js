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

