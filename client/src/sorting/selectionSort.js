import sleep from '../utils/sleep'

const selectionSort = async (randomArray,setCurrentElement,setNextElement,setCurrentStep) => {
  setCurrentStep([0,6])
  for (let i = 0; i < randomArray.length; i++) {
    setCurrentStep([1,5])
    setCurrentElement(i)
    await sleep(500)
    for (let j = i + 1; j < randomArray.length; j++) {
      setCurrentStep([2,4])
      await sleep(500)
      setNextElement(j)
      if (randomArray[j] < randomArray[i]) {
        setCurrentStep([3])
        await sleep(500)
        let temp = randomArray[i]
        randomArray[i] = randomArray[j]
        randomArray[j] = temp
      }
    }
  }
  setCurrentElement(null)
  setNextElement(null)
  setCurrentStep([])
}

export default selectionSort