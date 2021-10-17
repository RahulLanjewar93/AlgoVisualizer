import React, { useState, useEffect, createContext, useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sorting from './components/Sorting/Sorting'
import Searching from './components/Searching/Searching'
import Landing from './components/Landing/Landing'
import Navbar from './components/Shared/Navbar'
import bubbleSort from './utils//alogrithms/sorting/bubbleSort'
import selectionSort from './utils//alogrithms/sorting/selectionSort'
import steps from './utils/steps'
import { Box, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/private-theming'

export const GlobalContext = createContext()

function App() {

  const [randomArray, setRandomArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [nextElement, setNextElement] = useState(1);
  const [stepsArray, setStepsArray] = useState(["Please Select Algorithm"])
  const [currentStep, setCurrentStep] = useState([])

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
