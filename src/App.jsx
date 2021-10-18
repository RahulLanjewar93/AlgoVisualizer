import React, { useState, useEffect, createContext, useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sorting from './components/Sorting/Sorting'
import Searching from './components/Searching/Searching'
import Landing from './components/Landing/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import linearSearch from './utils//alogrithms/searching/linearSearch'
import binarySearch from './utils//alogrithms/searching/binarySearch'
import steps from './utils/steps'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])
  const [target, setTarget] = useState(null)
  const [index, setIndex] = useState(null)

  useEffect(() => {
    insertInArray();
  }, [])

  const insertInArray = () => {
    const newArray = []
    for (let i = 0; i < 20; i++) {
      newArray.push(Math.floor(Math.random() * 64));
    };
    setRandomArray(newArray)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FAF6F2",
        light: "#FAF6F2",
        dark: "#FAF6F2",
        contrastText: "#232323",
      },
      secondary: {
        main: "#232323",
        light: "#232323",
        dark: "#232323",
        contrastText: "#FAF6F2",
        background: "#232323"
      },
    },
    typography: {
      fontFamily: "Raleway,Great Vibes",
      fontWeightLight: 400,
      fontWeightMedium: 500,
      fontWeightRegular: 600,
      fontWeightBold: 700,
      button: {
        textTransform: "capitalize"
      }
    },
  })

  const algoReducer = async (algoState, action) => {
    const speed = 100
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
      case 'LINEARSEARCH':
        algoState = true
        setStepsArray(steps.linearsearch)
        setIndex(await linearSearch(randomArray, index, setIndex, setCurrentElement, setCurrentStep, speed, target))
        break
      case 'BINARYSEARCH':
        algoState = true
        setStepsArray(steps.binarysearch)
        setIndex(await binarySearch(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed, index, setIndex, target))
        break
      default:
        break
    }
  }
  const [algoState, dispatch] = useReducer(algoReducer, false)


  const contexts = {
    randomArray,
    setRandomArray,
    currentElement,
    setCurrentElement,
    nextElement,
    setNextElement,
    dispatch,
    algoState,
    stepsArray,
    setStepsArray,
    currentStep,
    setCurrentStep,
    target,
    setTarget,
    index,
    setIndex

  }

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <GlobalContext.Provider value={contexts}>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route path='/Sorting' component={Sorting} />
              <Route path='/Searching' component={Searching} />
              <Route exact path='/' component={Landing} />
            </Switch>
          </Router>
        </GlobalContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
