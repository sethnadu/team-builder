import React, {useState} from 'react';

import Cards from "./Components/cards.js";
import Form from "./Components/Form.js";
import './App.css';

function App() {

  const [members, setMembers] = useState([]);

  const [memberToEdit, setMemberToEdit] = useState([]);

  // const editHandler = (props) => setMemberToEdit(members);
  
  return (
    <div className="App">
      <Form  members = {members} setMembers = {setMembers} memberToEdit ={memberToEdit} setMemberToEdit = {setMemberToEdit}/>
      <Cards  members = {members} memberToEdit ={memberToEdit} setMemberToEdit = {setMemberToEdit} />
    </div>
  );
}

export default App;
