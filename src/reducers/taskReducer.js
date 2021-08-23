

const taskReducer = (state={},action) =>{
    switch(action.type){
        case "ADD_TASK":{
            console.log("added a Task");
            return state;
        }
        case "ADD_TASK_ERR":{
            console.log("ERROR OCC");
            return state;
        }
        case "REMOVE_TASK": {
            console.log("A task was removed...");
            return state;
          }
          case "REMOVE_TASK_ERR": {
            console.log("A task remove error occured....");
            return state;
          }
        default:
            return state;
    }
}

export default taskReducer