import React, { useState, useEffect, createContext, useReducer } from 'react'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'

export const RunningContext = createContext()

const sleep = (miliseconds) => {
  return new Promise(resolve => setTimeout(resolve, miliseconds))
}
function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const insertInArray = () => {
    for (let i = 0; i < 30; i++) {
      setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
    };
  }

  useEffect(() => {
    insertInArray();
  }, [])

  const bubbleSort = async () => {
    for (let i = 0; i < randomArray.length; i++) {
      for (let j = 0; j < randomArray.length - 1 - i; j++) {
        setCurrentElement(j)
        setNextElement(j + 1)
        await sleep(100)
        if (randomArray[j] > randomArray[j + 1]) {
          let temp = randomArray[j]
          randomArray[j] = randomArray[j + 1]
          randomArray[j + 1] = temp
        }
      }
    }
    setCurrentElement(null)
    setNextElement(null)
  }

  const selectionSort = async () => {
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

  return (
    <RunningContext.Provider value={{ randomArray: randomArray, bubbleSort, selectionSort, currentElement, nextElement }}>
      <div className="App">
        <Navbar></Navbar>
        <Main ></Main>
      </div>
    </RunningContext.Provider>
  );
}

export default App;
