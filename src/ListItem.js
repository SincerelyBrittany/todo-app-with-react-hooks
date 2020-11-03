import React from 'react'
import {Card} from './Styles'

export default function ListItem(props){
  return(
    <Card>
      <h4> Item: {props.item} </h4> 
      <p> Priority: {props.priority} </p>
    </Card>
  )
}