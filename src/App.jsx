import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function reducer(state,{type,payload}){
  switch(type){
    case 'add digit':
      return{
        ...state,
        currentOperation: `${state.currentOperation}${payload.digit}`,
      }
    case 'delete digit':
      return{
        ...state,
        currentOperation: '',
        previousOperation: ''
      }
    case 'set operation':
      return{
        ...state,
        previousOperation: state.currentOperation,
        currentOperation: '',
        operation: payload.operation

      }
      case 'calculate':
        if(state.operation==='/'){
          let result=parseFloat(state.previousOperation)/parseFloat(state.currentOperation)
          return{
            ...state,
            currentOperation: result.toString()
          }
  }
  else if(state.operation==='*'){
    let result=parseFloat(state.previousOperation)*parseFloat(state.currentOperation)
    return{
      ...state,
      currentOperation: result.toString()
    }


  }
  else if(state.operation==='+'){
    let result=parseFloat(state.previousOperation)+parseFloat(state.currentOperation)
    return{
      ...state,
      currentOperation: result.toString()
    }

  }
  else if(state.operation==='-'){
    let result=parseFloat(state.previousOperation)-parseFloat(state.currentOperation)
    return{
      ...state,
      currentOperation: result.toString()
    }
  }

}
}

function App() {
  const [{previousOperation,currentOperation,operation}, dispatch]=useReducer(reducer,{previousOperation: '',currentOperation: '',operation: ''})

  

  return (
    <>
      <div className='container-grid'>
        <div className='output'>
          <div className='previousOperation'>{previousOperation}</div>
          <div className='currentOperation'>{currentOperation}</div>
        </div>
        <button className='item1'>AC</button>
        <button className='item2' onClick={()=>dispatch({type: 'delete digit'})}>DEL</button>
        <button className='item3' onClick={()=>dispatch({type: 'set operation',payload: {operation: '/'}})}>/</button>
        <button className='item4' onClick={()=>dispatch({type: 'add digit',payload: {digit: 1}})}>1</button>

        <button className='item5' onClick={()=>dispatch({type: 'add digit',payload: {digit: 2}})}>2</button>
        <button className='item6' onClick={()=>dispatch({type: 'add digit',payload: {digit: 3}})}>3</button>
        <button className='item3' onClick={()=>dispatch({type: 'set operation',payload: {operation: '*'}})}>*</button>
        <button className='item8' onClick={()=>dispatch({type: 'add digit',payload: {digit: 4}})}>4</button>
        <button className='item9' onClick={()=>dispatch({type: 'add digit',payload: {digit: 5}})}>5</button>
        <button className='item10' onClick={()=>dispatch({type: 'add digit',payload: {digit: 6}})}>6</button>
        <button className='item3' onClick={()=>dispatch({type: 'set operation',payload: {operation: '+'}})}>+</button>
        <button className='item12' onClick={()=>dispatch({type: 'add digit',payload: {digit: 7}})}>7</button>
        <button className='item13' onClick={()=>dispatch({type: 'add digit',payload: {digit: 8}})}>8</button>
        <button className='item14' onClick={()=>dispatch({type: 'add digit',payload: {digit: 9}})}>9</button>
        <button className='item3' onClick={()=>dispatch({type: 'set operation',payload: {operation: '-'}})}>-</button>
        <button className='item16'>.</button>
        <button className='item17' onClick={()=>dispatch({type: 'add digit',payload: {digit: 0}})}>0</button>
        <button className='item18' onClick={()=>dispatch({type: 'calculate'})}>=</button>

      </div>

    </>
  )
}

export default App
