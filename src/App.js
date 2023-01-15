import { useState } from 'react';
import './App.css';
import {AddItem,Item} from './components/index';

const App = ()=> {
  const [newItem , setnewItem]=useState("");
  const [editedItem,setEditItem]=useState(null);
  const [editedText,seteditedText]=useState("");
  const [items , setItems]=useState([]);
  const editItem = () =>{
    if(editedText!=""){
      const obj={
        id:editedItem.id,
        text:editedText
      }
      setItems(prevItems => [...prevItems,obj])
      let filterRecords = [...items].filter( task => task.id !== obj.id );
      let updatedObject = [...filterRecords, obj]
      setItems(updatedObject);
      setEditItem(null);
      seteditedText("");
      alert("Updated");
    }
    else{
      alert("Invalid Item");
    }
  }
  const addNewItem = ()=>{
    if(newItem && newItem!=''){
      const obj={
        id:Math.floor(Math.random()*1000),
        text:newItem
      }
      setItems(prevItems => [...prevItems,obj])
      setnewItem("");
      document.getElementById("inputNew").value="";
    }
    else{
      alert("Invalid Item");
    }
  }

  const deleteItem = (id) =>{
    const filtredItems = items.filter((obj) => obj.id !== id)
    setItems(filtredItems);

  }


  const mapping = items.map( item=> 
                <Item item={item} setEditItem={setEditItem} deleteItem={deleteItem} seteditedText={seteditedText} editedItem={editedItem} editItem={editItem}/>
  );
  return (
    
    <div className="centered-div">
      <center><h1 className="p-5">My Todo List</h1></center>
      <div className='container py-5 h-100'>
        <AddItem addNewItem={addNewItem}  setnewItem={setnewItem} />
        <div className="d-grid gap-3">
          {mapping}
        </div>

      </div>
    
    </div>
  );
}

export default App;
