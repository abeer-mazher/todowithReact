import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



function TodoItems({item,element,setItem,index}) {

    const deleteItem = (index)=>{
        const updated = item.filter((e,i)=> index !== i)
        setItem(updated);

    }
  return (
    <div className='w-full flex gap-2'>
        <div className='w-10/12'>
            <p>{element}</p>
        </div>
        <div className='w-2/12 flex gap-2 text-white'>
           <div className='w-6/12 flex justify-center items-center bg-slate-900'>
            <FaEdit/>
           </div>
           <div className='w-6/12 flex justify-center items-center bg-slate-900' onClick={()=>deleteItem(index)}>
              <MdOutlineDeleteForever />
           </div>
        </div>
    </div>
  )
}

export default TodoItems