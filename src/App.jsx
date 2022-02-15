import React, { useState, useEffect, createContext, useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sorting from './components/Sorting/Sorting'
import Searching from './components/Searching/Searching'
import Pathfinding from './components/Pathfinding/Pathfinding'
import Landing from './components/Landing/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import mergeSort from './utils/alogrithms/sorting/mergeSort'
import linearSearch from './utils//alogrithms/searching/linearSearch'
import binarySearch from './utils//alogrithms/searching/binarySearch'
import steps from './utils/steps'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
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

  const changeArray = (e) => {
    let newArray = e.target.value.split(',')
    console.log(newArray, 'na')
    newArray = newArray.filter(element => {
      let result = null;
      try {
        result = Number(element)
        console.log('inside try', result)
      } catch (err) {
        console.log('err', err)
      }
      if (isNaN(result)) {
        return false
      }
      return result
    })
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
        algoState = false
        break
      case 'SELECTION':
        algoState = true
        setStepsArray(steps.selectionsort)
        await selectionSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed)
        break
      case 'MERGE':
        algoState = true
        setStepsArray(steps.selectionsort)
        let result = await mergeSort(randomArray, setRandomArray, sortedArray, setSortedArray, setCurrentElement, setNextElement, setCurrentStep, speed)
        setRandomArray(result)
        setSortedArray([])
        break
      case 'LINEARSEARCH':
        algoState = true
        setStepsArray(steps.linearsearch)
        setIndex(await linearSearch(randomArray, index, setIndex, setCurrentElement, setCurrentStep, speed, target))
        break
      case 'BINARYSEARCH':
        algoState = true
        setStepsArray(steps.binarysearch)
        setIndex(await binarySearch(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, 100, index, setIndex, target))
        break
      default:
        break
    }
  }
  const [algoState, dispatch] = useReducer(algoReducer, false)


  const contexts = {
    randomArray,
    setRandomArray,
    sortedArray,
    setSortedArray,
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
    setIndex,
    changeArray,
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
              <Route path='/Pathfinding' component={Pathfinding} />
              <Route exact path='/' component={Landing} />
            </Switch>
          </Router>
        </GlobalContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
