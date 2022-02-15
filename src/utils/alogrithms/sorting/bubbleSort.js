import sleep from '../../sleep'

const bubbleSort = async (randomArray,setRandomArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {
  const newArray = [...randomArray]
  console.log('na',newArray)
  setCurrentStep([0,6])
  for (let i = 0; i < newArray.length; i++) {
    await sleep(speed)
    setCurrentStep([1,5])
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      await sleep(speed)
      setCurrentElement(j)
      setNextElement(j + 1)
      setCurrentStep([2,4])
      if (newArray[j+1] < newArray[j]) {
        await sleep(speed)
        setCurrentStep([3])
        let temp = newArray[j]
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
      await setRandomArray([...newArray])
    }
  }
  setCurrentElement(null)
  setNextElement(null)
  setCurrentStep([])
  console.log('sorting done',newArray)
}
export default bubbleSort
