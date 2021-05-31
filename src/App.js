import './App.css';
import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Hero} from "./components/hero/Hero";

function App() {
    return (
        <>
            <Router exact path="/" component={Hero}/>
            <Hero/>
        </>
    )
}

export default App;
