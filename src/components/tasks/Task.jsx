import React from 'react'
import moment from 'moment'
import { removeTask } from '../../actions/taskActions'
import { connect } from 'react-redux'

const Task = ({task,removeTask}) => {
    const handleRemove = task =>{
        removeTask(task)
    }
    return (
        <tr>
        <th scope="row">{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
     
        <td><span onClick={()=>handleRemove(task)} className="material-icons text-danger" style={{cursor:'pointer'}}>
        delete
        </span></td>
      </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeTask: (task) => dispatch(removeTask(task)),
      
    };
  };
  
  export default connect(null, mapDispatchToProps)(Task);
