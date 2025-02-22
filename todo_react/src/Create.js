import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task,setTask]=useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task:task})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }
  return (
    <div>
        <input type="text" name="" id="" placeholder="Add task" onChange={(e)=> setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add a Item</button>

    </div>
  )
}

export default Create