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
    for (let i = 0; i < 5; i++) {
      setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
    };
  }

  useEffect(() => {
    insertInArray();
  }, [])

  const bubbleSort = async () => {
    let inputArray = randomArray
    for (let i = 0; i < inputArray.length; i++) {
      for (let j = 0; j < inputArray.length - 1 - i; j++) {
        setCurrentElement(j)
        setNextElement(j + 1)
        await sleep(500)
        if (inputArray[j] > inputArray[j + 1]) {
          let temp = inputArray[j]
          inputArray[j] = inputArray[j + 1]
          inputArray[j + 1] = temp
        }
        setRandomArray([...inputArray])
      }
    }
    setCurrentElement(null)
    setNextElement(null)
  }

  return (
    <RunningContext.Provider value={{ randomArray: randomArray, bubbleSort: bubbleSort, currentElement, nextElement }}>
      <div className="App">
        <Navbar></Navbar>
        <Main ></Main>
      </div>
    </RunningContext.Provider>
  );
}

export default App;
