import React, {useState} from 'react';

import Cards from "./Components/cards.js";
import Form from "./Components/Form.js";
import './App.css';

function App() {

  

  const [members, setMembers] = useState([]
  )


  

  

  return (
    <div className="App">
      <Form  members = {members} setMembers = {setMembers}/>
      <Cards members = {members} />
    </div>
  );
}

export default App;
