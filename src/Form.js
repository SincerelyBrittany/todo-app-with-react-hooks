import React, { useState } from 'react'

export default function Form(props){

  const [itemText, setItemText] = useState('')
  const [priorityText, setPriorityText] = useState('')

  const handleItemInputChange = (e) =>{
    //you have control over what someone puts into a form here
    setItemText(e.target.value)
  }

  const handlePriorityInputChange = (e) =>{
    setPriorityText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitCallback(itemText, priorityText)
  }

return(
      <form> 
        <input type="text" 
        placeholder="item" 
        onChange={handleItemInputChange} 
        value={itemText}/>
        <input type="text" 
        placeholder="priority" 
        onChange={handlePriorityInputChange} 
        value={priorityText}/>
        <button onClick={handleSubmit}> New Todo </button> 
      </form>
    )
  }