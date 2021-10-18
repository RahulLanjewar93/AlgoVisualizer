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
        "0  var low = 0",
        "1  var high = arr.length - 1",
        "2  while(low <= high) {",
        "3      var mid = Math.floor((low + high) / 2)",
        "4      if(arr[mid] == search) {",
        "5          return mid",
        "6      }",
        "7      if(arr[mid] < search) {",
        "8          low = mid + 1",
        "9      } else {",
        "10          high = mid - 1",
        "11      }",
        "12  }",
        "13  return -1"
    ],
}

export default steps;

