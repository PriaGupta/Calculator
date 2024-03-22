
import React,{ useState } from 'react';
import './App.css';

function App() {

  const[result,setResult]=useState("")

  const clickHandler=(e)=>{
   setResult(result.concat(e.target.value))
  }

  const clearDisplay=()=>{
     setResult("")
  }

  const output=()=>{
    setResult(eval(result).toString())
  }
  return (
    <>
    <div className="container">
       <div className="calculator">
        <h1>Calculator</h1>
        <div id='cal-one'>
        <input type="text" id="inputBox" placeholder="0" value={result}/>
        </div>
         <div className='all'>
          <input type='button' className='button' value='9' onClick={clickHandler}/>
          <input type='button' className='button' value='8' onClick={clickHandler}/>
          <input type='button' className='button' value='7' onClick={clickHandler}/>
          <input type='button' className='button' value='6' onClick={clickHandler}/>
         
          <input type='button' className='button' value='5' onClick={clickHandler}/>
          <input type='button' className='button' value='4' onClick={clickHandler}/>
          <input type='button' className='button' value='3' onClick={clickHandler}/>
          <input type='button' className='button' value='2' onClick={clickHandler}/>
          
          <input type='button' className='button' value='1' onClick={clickHandler}/>
          <input type='button' className='button' value='0' onClick={clickHandler}/>
          <input type='button' className='button sign' value='%' onClick={clickHandler}/>
          <input type='button' className='button sign' value='/' onClick={clickHandler}/>
          
          <input type='button' className='button sign' value='*' onClick={clickHandler}/>
          <input type='button' className='button sign' value='-' onClick={clickHandler}/>
          <input type='button' className='button sign' value='+' onClick={clickHandler}/>
          <input type='button' className='button sign' value='.' onClick={clickHandler}/>
         
          
          <input type='button' className='button main' value='Clear' onClick={clearDisplay}/>
          <input type='button' className='button main' value='=' onClick={output}/>

       </div> 
       </div>
    </div>

    </>
  );
}

export default App;
