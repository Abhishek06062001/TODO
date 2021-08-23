import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../actions/taskActions'

const AddTask = () => {

    const [task,setTask] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
       dispatch(addTask({task}))
       setTask('')
        console.log(task);
    }
    return (
        <form onSubmit={handleSubmit} className="container" autoComplete="off" style={{marginTop:'30px'}}>
       
  <div className="mb-3">
    <label htmlFor="task" className="form-label">Add a Task</label>
    <input type="text" className="form-control" id="task" value={task}  onChange={(e)=>setTask(e.target.value)} />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    )
}

export default  (AddTask);
