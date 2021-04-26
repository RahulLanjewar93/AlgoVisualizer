import React, { useState } from 'react'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import RunningContext from './components/RunningContext';

function App() {
  const [running, setRunning] = useState(false)
  return (
    <RunningContext.Provider value={{ running, setRunning }}>
      <div className="App">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </RunningContext.Provider>
  );
}

export default App;
