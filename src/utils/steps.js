const steps = {
    'bubblesort':[
        "0  for(i=0;i<arr.length<i++) {",
        "1      for(j=0;j<arr.length-i;j++) {",
        "2          if(arr[j+1] < arr[j]) {",
        "3              swap(arr[j+1],arr[j])",
        "4          }",
        "5      }",
        "6  }"
    ],
    'selectionsort':[
        "0  for(i=0;i<arr.length<i++) {",
        "1      for(j=0;j<arr.length-i;j++) {",
        "2          if(arr[i] > arr[j]) {",
        "3              swap(arr[i],arr[j])",
        "4          }",
        "4      }",
        "6  }"
    ],
}

export default steps;

