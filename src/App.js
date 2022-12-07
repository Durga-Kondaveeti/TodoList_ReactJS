import React,{ useState } from 'react';
import './App.css';
import List from './datalist';
const App = () => {
  const[todolist,setTodolist] = useState([])
  const[data,setData] = useState('')
  const changeHandler=(e)=>
  {
    setData(e.target.value)
  }
  const submitHandler=(e)=>
  {
    e.preventDefault()
    if(data!=='')
    {setTodolist([...todolist,data])
    setData('')
    console.log(todolist);}
  }
  const deleteHandler=(indexvalue)=>
  {
    let copylist = todolist
    copylist=copylist.filter((data,index)=>index!==indexvalue) 
    setTodolist(copylist)
  }
  return (
    <div>
     <center>
    <div className='mainDiv'> 
      <h1>TODO LIST</h1>
      <div class='tododata'>
        <form onSubmit={submitHandler}>
        <input type="text" value={data} onChange={changeHandler} class="input" placeholder='enter here'/>&nbsp;&nbsp;
        <input type="submit"  class='submitbutton' />
        </form>
      </div>
      <h1><List todolist={todolist} deleteHandler={deleteHandler}/></h1>
      </div>
      </center> 
    </div>
  
    
  )
}

export default App
