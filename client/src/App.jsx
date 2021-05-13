import React, { useState, useEffect, createContext, useReducer } from 'react'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import bubbleSort from './sorting/bubbleSort'
import selectionSort from './sorting/selectionSort'

export const GlobalContext = createContext()

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

  const algoReducer = async (algoState, action) => {
    switch (action.type) {
      case 'BUBBLE':
        algoState = true
        await bubbleSort(randomArray, setCurrentElement, setNextElement)
      case 'SELECTION':
        algoState = true
        await selectionSort(randomArray, setCurrentElement, setNextElement)
        break
    }
  }

  const [algoState, dispatch] = useReducer(algoReducer, false)

  const contexts = {
    randomArray,
    currentElement,
    nextElement,
    dispatch,
    algoState
  }

  return (
    <GlobalContext.Provider value={contexts}>
      <div className="App">
        <Navbar></Navbar>
        <Main ></Main>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
