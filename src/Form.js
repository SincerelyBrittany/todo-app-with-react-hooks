import React, { useState } from 'react'

export default function Form(props){

  const [itemText, setItemText] = useState('')
  const [priorityText, setPriorityText] = useState('')

  const handleItemInputChange = (e) =>{
    setItemText(e.target.value)
  }

  const handlePriorityInputChange = (e) =>{
    setPriorityText(e.target.value)
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
        <button> New Todo </button> 
      </form>
    )
  }