import React, {useState} from 'react';
import './App.css';

function App() {
 
    const [items, setItems] = useState([
      {description: "Walk Dog", haspriority:true},
      {description: "Clean Dishes", haspriority:true},
      {description: "Wash Windows", haspriority:false}
    ])
 
    const [newItem, setNewItem,] = useState("")
    const [newPriority, setNewPriority] = useState("")

    const addPriority = ((index) =>{
      const copyItems = [... items]
      copyItems[index].haspriority = !copyItems[index].haspriority
      setItems(copyItems)
    })
  
    const itemNodes = items.map((item, index) => { 
      return(
          <li key={index} className={item.haspriority ? "high-priority" : "low-priority"}>
            
          <span>{item.description}</span>
          {item.haspriority ? <button class="green" onClick={() => 
          addPriority(index)}> High Priority </button> : <button class ="red" onClick={() => 
          addPriority(index)}>Low Priority</button>}</li> 
      )
  })
  
    const handleItemInput = (event) =>{
      setNewItem(event.target.value)
    }

    const handleRadioInput = (event) =>{
      console.log(event)
      setNewPriority(event.target.value)
    }
  
    const saveNewItem=((event) => {
      event.preventDefault()
      const copyItem = [... items]
      copyItem.push({description: newItem, haspriority: newPriority})
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
    <label for="high-priority">High Priority:</label>
    <input type="radio" onClick={handleRadioInput} value ="true" name="priority"></input>
    Low priority
    <input type="radio"  onClick={handleRadioInput} value=""  name="priority"></input>
    <input type="submit" value="Save New Item" /> 
    </form>

    <ul>
    {itemNodes}
    </ul>

</div>
  );
}

export default App;
