import { useState } from 'react'
import './App.css'
import { Header } from './composants/Header';
import { FirstSection } from './composants/FirstSection';
import { SecondSection } from './composants/SecondSection';
import React from 'react';
import { Météo } from './composants/Météo';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <Header />
        <FirstSection/>
        {/* <Météo position={[0,0]}/> */}
        <SecondSection/>

    </>
  )
}

export default App
