import sleep from '../../sleep'

const mergeSort =  async (randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {
  const arr = [...randomArray]
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  await sleep(speed)
  setCurrentElement(left.length)
  await sleep(left.length-1+right.length-1)
  setNextElement(right)
  let leftResult = await mergeSort(left,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)
  let rightResult = await mergeSort(right,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)
  await sleep(speed)

  const result = merge(
    leftResult,
    rightResult,
    randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed
  )
  console.log('result',result)
  await sleep(speed)
  setCurrentElement(null)
  setSortedArray(result)
  return result
}
export default mergeSort


const merge = (sortedArr1,sortedArr2,randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {
  let leftIndex = 0;
  let rightIndex=0;

  let result = []
  while (leftIndex < sortedArr1.length && rightIndex < sortedArr2.length){
      if(sortedArr1[leftIndex]<=sortedArr2[rightIndex]){
          result.push(sortedArr1[leftIndex])
          leftIndex++
      }else{
          result.push(sortedArr2[rightIndex])
          rightIndex++
      }
      setSortedArray(result)
  }

  setSortedArray([...result,...sortedArr1.slice(leftIndex),...sortedArr2.slice(rightIndex)])
  return [...result,...sortedArr1.slice(leftIndex),...sortedArr2.slice(rightIndex)]
}
