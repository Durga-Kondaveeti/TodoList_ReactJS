import React from 'react'
import './App.css'
const datalist = ({todolist,deleteHandler}) => {
 
  return (
    <div>
    <div class="listdataDiv">
      {
        todolist.map((data,index)=>
        <div key={index}>
              <li >{data}
              <button onClick={()=>deleteHandler(index)} class="deletebutton">
              <b>Delete</b>
               </button>
              </li>
            
        </div>
        )
      }
    </div>
    </div>
  )
}

export default datalist
