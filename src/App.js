import React, {useState} from 'react';
import './App.css';

function App() {
 
    const [items, setItems] = useState([
      {description: "Walk Dog", priority:"high"},
      {description: "Clean Dishes", priority:"high"},
      {description: "Wash Windows", priority:"low"}
    ])
 
    const [newItem, setNewItem] = useState("")


  
    const itemNodes = items.map((item) => { 
      return(
          <li><span>{item.description}</span></li> 
      )
  })

  
  
    const handleItemInput = (event) =>{
      setNewItem(event.target.value)
    }
  
    const saveNewItem=((event) => {
      event.preventDefault()
      const copyItem = [... items]
      copyItem.push({description: newItem})
      setItems(copyItem)
      setNewItem("")
    })

  return (

    <div className="List">

    <h1>ToDo List</h1>
    <hr></hr>

    <form onSubmit ={saveNewItem}>

    <label htmlFor="new-item">Add a new item:</label>  
      <input id="new-item" type="text" onChange={handleItemInput} value={newItem}/>                
      High Priority
    <input type="radio" name="high-priority"></input>
    Low priority
    <input type="radio" name="low-priority"></input>
    <input type="submit" value="Save New Item" /> 
    </form>

    <ul>
    {itemNodes}
    </ul>


</div>
  );
}

export default App;
