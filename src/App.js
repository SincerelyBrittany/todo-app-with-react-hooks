import React, { useState, useEffect } from "react";
import "./styles.css";
import List from './List';

export default function App() {
  // const items = ["wake up", "code"]
  const [items, setItems] = useState(["wakeUP"])
  return (
    <div className="App">
      <h1>Todos</h1>
      <List items={items}/>
    </div>
  );
}