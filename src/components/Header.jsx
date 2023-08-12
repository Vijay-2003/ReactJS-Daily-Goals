import React from 'react'
import './todoform.css'
import { Task } from './Task'
import { useState,useEffect } from 'react'


function Forms() {

    const initialarr = localStorage.getItem("tasks")
    ?JSON.parse(localStorage.getItem("tasks")):[];

    const [tasks,settask] = useState(initialarr);
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");

    const submithandler = (e) => {
        e.preventDefault();
        settask([...tasks, { title,description}]);
        settitle("")
        setdescription("")
    };


    const deleteTask = (index) => {
        const filterarr = tasks.filter((val,i) => {
            return i !== index;
        })
        settask(filterarr)
    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])


  return (
    <div className='container'>
        <form id='todoform' onSubmit={submithandler}>
        <h1>Daily Goals</h1>
            <input 
            id='topicinput' 
            type='text' 
            placeholder='Goal Title'
            value={title} 
            onChange={(e) => settitle(e.target.value)}
            >
            </input>
            <textarea 
            id='desinput' 
            placeholder='Goal Description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            ></textarea>
            <button id='btninput' type='submit'>Add Task</button>
        </form>
        {tasks.map((item,index) => (
            <Task key={index} 
            title={item.title} 
            description={item.description} 
            deleteTask={deleteTask}
            index={index}    
            />
        ))}  
    </div>
  )
}

export default Forms;