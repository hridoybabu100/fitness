
import { Suspense } from 'react';
import './App.css'
import Countries from './Country/Countries/Countries'

const CountryData = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
console.log(CountryData);




function App() {

  

  return (
    <>
      <h1>World on The React Goo...</h1>

      <Suspense fallback={<h2>ALL Flags Are Comming</h2>}>
        <Countries CountryData={CountryData}></Countries>
      </Suspense>

   

    
    </>
  )
}

export default App
