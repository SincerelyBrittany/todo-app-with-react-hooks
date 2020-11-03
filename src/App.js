import React, { useState } from "react";
import { Title } from "./Styles";
import List from "./List";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [listItems, setListItems] = useState([]);

  const handleItemDelete = id => {
    const newListItems = listItems.filter(li => li.id !== id);
    setListItems(newListItems);
  };

  const handleFormSubmit = formData => {
    setListItems([
      ...listItems,
      {
        item: formData[0],
        priority: formData[1],
        id: `${formData[0]}${formData[1]}`
      }
    ]);
  };
  return (
    <div className="App">
      {/* <Title>Todos:</Title> */}
      <Form
        submitCallback={handleFormSubmit}
        inputs={["Item", "Priority"]}
        submitValue={"New Todo"}
      />
      <List items={listItems} handleDelete={handleItemDelete} />
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import List from './List';
// import Form from './Form'

// export default function App() {
//   // const items = ["wake up", "code"]
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       item: "wakeUP",
//       priority: "high"
//     } 
//     // {
//     //   id: 2,
//     //   item: "wakeUP",
//     //   priority: "high"
//     // }
//   ])

//   const handleDelete = (id) => {
//     const newItems = items.filter(i => i.id !== id)
//     setItems(newItems)
//   }

//   const handleFormSubmit = (itemInfoArr) => {
//     const newItems = [...items, {
//       id: `${itemInfoArr[0]}${itemInfoArr[1]}`,
//       item: itemInfoArr[0],
//       priority: itemInfoArr[1]
//     }]
//     setItems(newItems)
//   }

//   return (
//     <div className="App">
//       <h1>Todos</h1>
//       <Form submitCallback={handleFormSubmit}/>
//       <List items={items} handleDelete={handleDelete}/>
//     </div>
//   );
// }
