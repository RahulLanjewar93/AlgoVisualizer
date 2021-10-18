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
        "0  for(i=0;i<arr.length<i++) {",
        "1      for(j=0;j<arr.length-i;j++) {",
        "2          if(arr[j+1] < arr[j]) {",
        "3              swap(arr[j+1],arr[j])",
        "4          }",
        "5      }",
        "6  }",
        "7  var low = 0",
        "8  var high = arr.length - 1",
        "9  while(low <= high) {",
        "10      var mid = Math.floor((low + high) / 2)",
        "11      if(arr[mid] == search) {",
        "12          return mid",
        "13      }",
        "14      if(arr[mid] < search) {",
        "15          low = mid + 1",
        "16      } else {",
        "17          high = mid - 1",
        "18      }",
        "19  }",
        "20  return -1"
    ],
}

export default steps;

