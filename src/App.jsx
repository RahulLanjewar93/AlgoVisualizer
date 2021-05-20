import React, { useState, useEffect, createContext, useReducer } from 'react'
import Main from './components/Sorting/Main'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './alogrithms/sorting/bubbleSort'
import selectionSort from './alogrithms/sorting/selectionSort'
import steps from './utils/steps'

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])

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
        setStepsArray(steps.bubblesort)
        await bubbleSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep)
        break
      case 'SELECTION':
        algoState = true
        setStepsArray(steps.selectionsort)
        await selectionSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep)
        break
    }
  }

  const [algoState, dispatch] = useReducer(algoReducer, false)

  const contexts = {
    randomArray,
    currentElement,
    nextElement,
    dispatch,
    algoState,
    stepsArray,
    currentStep
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
