import React, { useState, useEffect, createContext, useReducer } from 'react'
import SortingLayout from './components/Sorting/Layout'
import Landing from './components/Main/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import steps from './utils/steps'

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])

  const insertInArray = () => {
    for (let i = 0; i < 20; i++) {
      setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
    };
  }

  useEffect(() => {
    insertInArray();
  }, [])

  const algoReducer = async (algoState, action) => {
    const speed = 10
    switch (action.type) {
      case 'BUBBLE':
        algoState = true
        setStepsArray(steps.bubblesort)
        await bubbleSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed)
        break
      case 'SELECTION':
        algoState = true
        setStepsArray(steps.selectionsort)
        await selectionSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed)
        break
      default:
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
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <GlobalContext.Provider value={contexts}>
        <SortingLayout ></SortingLayout>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
