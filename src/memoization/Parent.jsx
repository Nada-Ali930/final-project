import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

export default function Parent() {

    let[counter,setCounter]=useState(0)
    let[notes,setNotes]=useState([])
    // let val=calc(counter)
    let val = useMemo(()=>{return calc(counter)},[counter])
    
    // let fName = {fName:'ali'}
    let fName = useMemo(()=>{return {fName:'ali'}},[])


    // let sayHi = function(){
    //     console.log('hi');
    // }

    let sayHi = useCallback(()=>{console.log('hi');},[])

    function addNote(){
        setNotes([...notes,' - new notes'])
    }

    function increase(){
        setCounter(counter+1)
    }

    function calc(num){
        let sum = 0
        for(let i=0;i<10;i++){
           sum+=num
        }
        return sum
    }

  return (
    <div className='container'>
      Parent
      <h1>val:{val}</h1>
      <h1>counter:{counter}</h1>
      <button onClick={increase} className='bg-red-500 px-2'>+</button>
      <br/><br/>
      <button onClick={addNote} className='bg-green-color'>add note</button>
      <ul>
        {notes.map(ele=><li>{ele}</li>)}
      </ul>
      <Child fName={fName} sayHi={sayHi}/>
    </div>
  )
}
