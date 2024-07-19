import React, { useState } from 'react'
import TodoItems from './TodoItems';

const TodoApp = () => {
    const [input,setInput]= useState("");
    const [item,setItem] = useState([])

    const addtodo = ()=>{
        if (input){
            setItem([...item,input])
            setInput("")
        }
    }
  return (
    <div className='bg-slate-800 h-screen w-full'>
        <h1 className='text-center text-2xl text-white font-semibold '>TodoApp</h1>
        <div className='max-w-screen-sm m-auto bg-white  px-4 py-2 flex gap-2 flex-col'>
          <div className='w-full flex gap-4'>
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Add your task' className='w-10/12 border-2 px-2' />
          <button className='w-2/12 bg-slate-900 text-white' onClick={addtodo}>Add</button>
          </div>
          {
            item.map((element,index)=>{
              return (
                <TodoItems item={item} element={element} index={index} setItem={setItem}/>
              )
            })
          }
        </div>

        </div>
  )
}

export default TodoApp