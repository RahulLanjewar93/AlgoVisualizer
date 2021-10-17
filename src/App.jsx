import React, { useState, useEffect, createContext, useReducer } from 'react'
import Sorting from './components/Sorting/Sorting'
import Landing from './components/Landing/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import steps from './utils/steps'
import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core'

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])

  const theme = createMuiTheme({
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
      fontWeightBold: 700
    }
  })
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
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Landing></Landing>
        <GlobalContext.Provider value={contexts}>
          <Sorting ></Sorting>
        </GlobalContext.Provider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
