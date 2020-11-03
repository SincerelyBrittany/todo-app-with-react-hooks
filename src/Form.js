
import React, { useState } from "react";

export default function Form(props) {
  const [inputs, setInputs] = useState(props.inputs.map(input => ""));

  const handleTextChange = (e, i) => {
    const nextInputs = [...inputs];
    nextInputs[i] = e.target.value;
    setInputs(nextInputs);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputs(props.inputs.map(i => ""));
    props.submitCallback(inputs);
  };

  const renderInputs = () => {
    return props.inputs.map((inputName, index) => (
      <input
        type="text"
        onChange={e => handleTextChange(e, index)}
        value={inputs[index]}
        placeholder={inputName}
        key={inputName}
      />
    ));
  };

  return (
    <form>
      {renderInputs()}
      <button type="submit" onClick={handleSubmit}>
        {props.submitValue}
      </button>
    </form>
  );
}


// import React, { useState } from 'react'

// export default function Form(props){

//   const [itemText, setItemText] = useState('')
//   const [priorityText, setPriorityText] = useState('')

//   const handleItemInputChange = (e) =>{
//     //you have control over what someone puts into a form here
//     console.log(e.target.value)
//     setItemText(e.target.value)
//   }

//   const handlePriorityInputChange = (e) =>{
//     setPriorityText(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setPriorityText("")
//     setItemText("")
//     props.submitCallback(itemText, priorityText)
//   }

// return(
//       <form> 
//         <input type="text" 
//         placeholder="item" 
//         onChange={handleItemInputChange} 
//         value={itemText}/>
//         <input type="text" 
//         placeholder="priority" 
//         onChange={handlePriorityInputChange} 
//         value={priorityText}/>
//         <button onClick={handleSubmit}> New Todo </button> 
//       </form>
//     )
//   }