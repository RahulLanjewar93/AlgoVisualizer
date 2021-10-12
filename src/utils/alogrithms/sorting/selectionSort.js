import sleep from '../../sleep'

const selectionSort = async (randomArray,setRandomArray,setCurrentElement,setNextElement,setCurrentStep,speed) => {
  const newArray = [...randomArray]
  setCurrentStep([0,6])
  for (let i = 0; i < newArray.length; i++) {
    setCurrentStep([1,5])
    setCurrentElement(i)
    await sleep(speed)
    for (let j = i + 1; j < newArray.length; j++) {
      setCurrentStep([2,4])
      await sleep(speed)
      setNextElement(j)
      if (newArray[j] < newArray[i]) {
        setCurrentStep([3])
        await sleep(speed)
        let temp = newArray[i]
        newArray[i] = newArray[j]
        newArray[j] = temp
      }
      await setRandomArray([...newArray])
    }
  }
  setCurrentElement(null)
  setNextElement(null)
  setCurrentStep([])
}

export default selectionSort