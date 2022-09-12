import { useState } from "react";
import PhoneBook from "./PhoneBook";
import './App.css';
import InformationTable from "./InformationTable";

function App(){
const [entry,setEntry]=useState([]);

const addUser =(item) =>{
  setEntry([...entry,item]);
  
}
  return(
    <div class="formData">
    <h3>React Phone Book App</h3>
    <PhoneBook addUser={addUser}/>
    <InformationTable entry={entry}/>
    </div>
  )
}
export default App;