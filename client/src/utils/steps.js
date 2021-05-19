const steps = {
    'bubblesort':[
        "for(i=0;i<arr.length<i++) {",
        "   for(j=0;j<arr.length-i;j++) {",
        "       if(arr[j+1] < arr[j]) {",
        "           swap(arr[j],arr[j+1])",
        "       }",
        "   }",
        "}"
    ],
    'selectionsort':[
        "for(i=0;i<arr.length<i++) {",
        "   for(j=0;j<arr.length-i;j++) {",
        "       if(arr[i] > arr[j]) {",
        "           swap(arr[i],arr[j])",
        "       }",
        "   }",
        "}"
    ],
}

export default steps;

