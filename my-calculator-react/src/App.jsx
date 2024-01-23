import { useState } from 'react'
import CalcButton from './CalcButton'
import './App.css'

function App() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: ""
  })

  function allClear(){
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    })
  }
  function handleNumber(value){
      let newValue = value;

      
      if(!calc.isInitial) newValue = calc.current + value;

    setCalc({current: newValue, total: calc.current,isInitial: false,preOp:calc.preOp})
  }

  function renderDisplay(){
    return calc.current
  }
  function handleOperator(value){
      const total = calculate();

      setCalc({current: total.toString(),total:total.toString(),isInitial:true,preOp:value})
  }
  function calculate(){
      let total = parseInt(calc.total);

      switch(calc.preOp){
        case "+":
          total += parseInt(calc.current)
          break;
        case "-":
          total -= parseInt(calc.current)
          break;
        case "*":
          total *= parseInt(calc.current)
          break;
        case "/":
          total = parseInt(calc.current)
          break;
        default:
          total = parseInt(calc.current)
      }

      return total;
  }
  function handleEqual(){
    let total = calculate();
    setCalc({current: total.toString(),total:total.toString(),isInitial:true,preOp:"="})

  }
  function Del(){
    console.log(typeof calc.current)
    let newCurrent = calc.current
    setCalc({current: newCurrent.substring(0,newCurrent.length-1),total:calc.current,isInitial:false,preOp:calc.preOp})

    
  }
  return (
    <div className="container">
      <div className="display">{renderDisplay()}</div>

      <CalcButton className='two-span' value='AC' onClick={allClear}/>
      <CalcButton value='DEL' onClick={Del}/>
      <CalcButton value='/' onClick={handleOperator} />

      <CalcButton value='1' onClick={handleNumber}  />
      <CalcButton value='2' onClick={handleNumber} />
      <CalcButton value='3' onClick={handleNumber}/>
      <CalcButton value='+' onClick={handleOperator}/>

      <CalcButton value='4' onClick={handleNumber}/>
      <CalcButton value='5' onClick={handleNumber}/>
      <CalcButton value='6' onClick={handleNumber}/>
      <CalcButton value='-' onClick={handleOperator}/>

      <CalcButton value='7' onClick={handleNumber}/>
      <CalcButton value='8' onClick={handleNumber}/>
      <CalcButton value='9' onClick={handleNumber}/>
      <CalcButton value='*' onClick={handleOperator}/>

      <CalcButton value='0' onClick={handleNumber}/>
      <CalcButton value='.' onClick={handleNumber}/>
      <CalcButton className='two-span' value='='  onClick={handleEqual}/>

    </div>
  )
}

export default App
