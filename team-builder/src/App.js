import React, {useState} from 'react';

import Cards from "./Components/cards.js";
import Form from "./Components/Form.js";
import './App.css';

function App() {

  const [members, setMembers] = useState([]);

 const submitMember = member => setMembers([...members, member])

  const edit =  uMember => setMembers([...members.map(member => {
    if (member.id === uMember.id) {
      return uMember;
    }
    return member;
  })])


  return (
    <div className="App">
      <Form  add = {submitMember} />
      {members.map((member, i) => (
        <Cards  member = {member} key ={i}  edit = {edit}/>
      ))}
    </div>
  );
}

export default App;
