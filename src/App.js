import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Google } from "./components/google/google";

const App = () => {
  return (
      <Router>
        <Google />
      </Router>
  )
}

export default App;
