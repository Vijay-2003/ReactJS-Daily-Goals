import React from 'react'
import './todoform.css'


const Task = ({title,description,deleteTask,index}) => {
  return (
    <div id='tasks'>
    <div>
    <p id='task'><b>Title : </b>{title}</p>
    <p id='description'><b>Description : </b>{description}</p>
    </div>
    <div>
        <button id='deletebtn' onClick={() => deleteTask(index)}>X</button>
    </div>
    </div>
  )
}

export {Task}