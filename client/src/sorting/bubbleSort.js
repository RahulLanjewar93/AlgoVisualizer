import sleep from '../utils/sleep'

const bubbleSort = async (randomArray,setCurrentElement,setNextElement,setCurrentStep) => {
  setCurrentStep([0,6])
  for (let i = 0; i < randomArray.length; i++) {
    setCurrentStep([1,5])
    await sleep(500)
    for (let j = 0; j < randomArray.length - 1 - i; j++) {
      setCurrentElement(j)
      setNextElement(j + 1)
      setCurrentStep([2,4])
      await sleep(500)
      if (randomArray[j+1] < randomArray[j]) {
        setCurrentStep([3])
        await sleep(500)
        let temp = randomArray[j]
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
      }
    }
  }
  setCurrentElement(null)
  setNextElement(null)
  setCurrentStep([])
}
export default bubbleSort
