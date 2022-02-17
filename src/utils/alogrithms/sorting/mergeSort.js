import sleep from '../../sleep'

const mergeSort =  async (randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {
  const defaultArray = [...randomArray];

  const helperFunc  = async (randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)=>{
    setCurrentStep([0,8])
    await sleep(speed)

    const arr = [...randomArray]
    if (arr.length <= 1){
    setCurrentStep([1,1])
    await sleep(speed)

      return arr
    }
    setCurrentStep([2,4])
    await sleep(speed)
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    setCurrentElement(defaultArray.indexOf(left[0]))
    setNextElement(mid)
    setCurrentStep([5,6])
    await sleep(speed)
    let leftResult = await helperFunc(left,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)
    setCurrentElement(mid)
    setNextElement(defaultArray.indexOf(right[0]))
    let rightResult = await helperFunc(right,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)
    setCurrentStep([7,7])
    await sleep(speed)
    const result = await merge(
      leftResult,
      rightResult,
      randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed
    )
    console.log('result',result)
    setCurrentElement(null)
    setNextElement(null)
    setSortedArray(result)
    setCurrentStep([0,8])
    await sleep(speed)
    return result
  };

  return helperFunc(randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed)

}
export default mergeSort


const merge = async (sortedArr1,sortedArr2,randomArray,setRandomArray,sortedArray,setSortedArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {

  setCurrentStep([11,25])
  await sleep(speed)
  let leftIndex = 0;
  let rightIndex=0;
  setCurrentStep([12,14])
  await sleep(speed)

  let result = []
  while (leftIndex < sortedArr1.length && rightIndex < sortedArr2.length){
    setCurrentStep([15,23])
    setCurrentElement(leftIndex)
    setNextElement(rightIndex)
    await sleep(speed)

      if(sortedArr1[leftIndex]<=sortedArr2[rightIndex]){
          setCurrentStep([16,19])
    await sleep(speed)

          result.push(sortedArr1[leftIndex])
          leftIndex++
      }else{
          setCurrentStep([19,22])
    await sleep(speed)

          result.push(sortedArr2[rightIndex])
          rightIndex++
      }
      setSortedArray(result)
  }
  setCurrentStep([24,24])
  setCurrentStep([25,25])
  await sleep(speed)

  setSortedArray([...result,...sortedArr1.slice(leftIndex),...sortedArr2.slice(rightIndex)])
  return [...result,...sortedArr1.slice(leftIndex),...sortedArr2.slice(rightIndex)]
}
