import './App.css';
import ConverterInput from './components/ConverterInput'
import { useState,useEffect } from "react";
function App() {
  const [loading,setLoading]=useState(false)
  const [currencyOptions,setCurrencyOptions]=useState([])
  const [error,setError]=useState([])
  const URL='https://open.exchangerate-api.com/v6/latest/'
  useEffect(()=>{
      fetch(URL)
      .then(res=>res.json())
      .then(data=>{
        setCurrencyOptions([data.base_code,Object.keys(data.rates)])
      })
  },[])
  return (
    <>
      <ConverterInput currencyOptions={currencyOptions} />
      <div className="equal">=</div>
      <ConverterInput currencyOptions={currencyOptions}/>
    </>
  );
}

export default App;
