import sleep from '../utils/sleep'

const selectionSort = async (randomArray,setCurrentElement,setNextElement) => {
    for (let i = 0; i < randomArray.length; i++) {
      let min = i;
      setCurrentElement(min)
      for (let j = i + 1; j < randomArray.length; j++) {
        setNextElement(j)
        if (randomArray[j] < randomArray[min]) {
          let temp = randomArray[min]
          randomArray[min] = randomArray[j]
          randomArray[j] = temp
        }
        await sleep(100)
      }
    }
    setCurrentElement(null)
    setNextElement(null)
}

export default selectionSort