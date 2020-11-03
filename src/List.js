import React, { useState, useEffect } from "react";
import ListItem from './ListItem'

export default function List(props) {
  const listItems = () => {
   return props.items.map(i => (
      <ListItem item={i.item} priority={i.priority} key={i.id} />
      ))

  }
  return(
    <div>
     {listItems()}
    </div>
  )
}





// import React, {Component} from 'react'

// export default class List extends Component{
//   constructor(props){
//     super(props)
//     this.state = {

//     }
//   }

// someMethod(){
//   const newItem = "wakeUp"
//   this.setState({items:[newItem]})

//   this.setState(prevState => ({
//     items: [...prevState.items, newItem]
//   }), () => {
//     //then do this
//   })
// }
// }

// import React, { useState, useEffect } from "react";

// export default function List() {
//   const [items, setItems] = useState([]);

//   //items = what my state is/ what I want the initial value of my state to be
//   //serItems = a function to set my state

//   const myMethod = () => {
//     setItems([...items, "wake up"]);
//   };

//   useEffect(() => {});
// }
