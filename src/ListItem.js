import React from 'react'
import {Card, RedButton} from './Styles'

export default function ListItem(props){

  const handleDelete = (e) => {
      e.preventDefault()
     props.deleteCallback(props.id)
  }

  return(
    <Card>
      <h4> Item: {props.item} </h4> 
      <p> Priority: {props.priority} </p>
      <RedButton onClick={handleDelete}> Delete </RedButton>
    </Card>
  )
}