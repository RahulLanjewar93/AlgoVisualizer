import sleep from '../utils/sleep'

const bubbleSort = async (randomArray,setCurrentElement,setNextElement) => {
  for (let i = 0; i < randomArray.length; i++) {
    for (let j = 0; j < randomArray.length - 1 - i; j++) {
      setCurrentElement(j)
      setNextElement(j + 1)
      await sleep(1)
      if (randomArray[j] > randomArray[j + 1]) {
        let temp = randomArray[j]
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
      }
    }
  }
  setCurrentElement(null)
  setNextElement(null)
}
export default bubbleSort
