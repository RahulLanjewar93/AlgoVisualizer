import React, { useState, useEffect, createContext, useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sorting from './components/Sorting/Sorting'
import Searching from './components/Searching/Searching'
import Landing from './components/Landing/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import steps from './utils/steps'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])

  const algoReducer = async (algoState, action) => {
    const speed = 0
    switch (action.type) {
      case 'BUBBLE':
        algoState = true
        setStepsArray(steps.bubblesort)
        await bubbleSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed, algoState)
        break
      case 'SELECTION':
        algoState = true
        setStepsArray(steps.selectionsort)
        await selectionSort(randomArray, setRandomArray, setCurrentElement, setNextElement, setCurrentStep, speed, algoState)
        break
      default:
        break
    }
    return algoState
  }

  const [algoState, dispatch] = useReducer(algoReducer, false)

  useEffect(() => {
    insertInArray();
  }, [])

  const insertInArray = () => {
    for (let i = 0; i < 20; i++) {
      setRandomArray(prevArray => [...prevArray, Math.floor(Math.random() * 64)]);
    };
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

  const contexts = {
    randomArray, setRandomArray,
    currentElement, setCurrentElement,
    nextElement, setNextElement,
    stepsArray, setStepsArray,
    currentStep, setCurrentStep,
    dispatch,
    algoState,
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <GlobalContext.Provider value={contexts}>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/Sorting' component={Sorting} />
              <Route path='/Searching' component={Searching} />
            </Switch>
          </Router>
        </GlobalContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
