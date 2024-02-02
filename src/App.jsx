import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1'
import { Component3 } from './components/Component2'

// fonctionnal component because it has a Function 
function App() {
  const [count, setCount] = useState(0)
  //UseSTATE HERE. Look bellow with setCount(count+1) bellow. 
  function countPlusOne () {
    setCount(count+1); //here we have the flag (PLEASE RERENDER when done with this). So you read from top to bottom. Note that the function will call on click only. WHY : Because Setcount means please rereder when you are done)
  }

//PROPS : Pass the information from top to the Bottom.  For exemple, we can pass "count" as information in Component 1 (because child). Look now. 

//What about DRILLING PROPS? if the component 2 is a child from component 1, passing though component 1 is possible. But not from app.jsx. let's do this. 

//SYNTHAX  : here I make my JS logic (after function et before return)

 //STEP = lways a return statment 
  return (
    <div>
      <h1>Hello fucking React</h1> 
   {/*    4) let's bring component 1 */}
      <Component1 count={count}/>
      <button onClick={countPlusOne}>Count up</button>
 {/*      //just an exemple of the button. Nb the value lives in component 2  and the function is above USESTATE*/ }
      <Component3 />
   
    </div>
  )
}

export default App; 
