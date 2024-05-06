import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function reducer(state,{type,payload}){
  switch(type){
    case "add digit":
      return{
        ...state,
        currentOperation: `${state.currentOperation}${payload.digit}`,
      }


  }

}

function App() {
  const [{previousOperation,currentOperation,operation}, dispatch]=useReducer(reducer,{})

  

  return (
    <>
      <div className='container-grid'>
        <div className='output'>
          <div className='previousOperation'></div>
          <div className='currentOperation'></div>
        </div>
        <button className='item1'>AC</button>
        <button className='item2'>DEL</button>
        <button className='item3'>/</button>
        <button className='item4'>1</button>
        <button className='item5'>2</button>
        <button className='item6'>3</button>
        <button className='item7'>*</button>
        <button className='item8'>4</button>
        <button className='item9'>5</button>
        <button className='item10'>6</button>
        <button className='item11'>+</button>
        <button className='item12'>7</button>
        <button className='item13'>8</button>
        <button className='item14'>9</button>
        <button className='item15'>-</button>
        <button className='item16'>.</button>
        <button className='item17'>0</button>
        <button className='item18'>=</button>

      </div>

    </>
  )
}

export default App
