import sleep from '../utils/sleep'

const bubbleSort = async (randomArray,setRandomArray,setCurrentElement,setNextElement,setCurrentStep) => {
  const newArray = randomArray
  setCurrentStep([0,6])
  for (let i = 0; i < newArray.length; i++) {
    setCurrentStep([1,5])
    await sleep(500)
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      setCurrentElement(j)
      setNextElement(j + 1)
      setCurrentStep([2,4])
      await sleep(500)
      if (newArray[j+1] < newArray[j]) {
        setCurrentStep([3])
        await sleep(500)
        let temp = newArray[j]
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
      setRandomArray([...newArray])
    }
  }
  setCurrentElement(null)
  setNextElement(null)
  setCurrentStep([])
}
export default bubbleSort
