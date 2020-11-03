import React, { useState, useEffect } from "react";
import "./styles.css";
import List from './List';
import Form from './Form'

export default function App() {
  // const items = ["wake up", "code"]
  const [items, setItems] = useState([
    {
      id: 1,
      item: "wakeUP",
      priority: "high"
    }, 
    {
      id: 2,
      item: "wakeUP",
      priority: "high"
    }
  ])

  const handleDelete = (id) => {
    const newItems = items.filter(i => i.id !== id)
    setItems(newItems)
  }
  return (
    <div className="App">
      <h1>Todos</h1>
      <Form />
      <List items={items} handleDelete={handleDelete}/>
    </div>
  );
}
