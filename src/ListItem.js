import React from 'react'

export default function ListItem(props){
  return(
    <div>
      <h4> Item: {props.item} </h4> 
      <p> Priority: {props.priority} </p>
    </div>
  )
}