import React, {useState, useEffect} from "react";



function Form (props) {
        console.log(props);

    const [newMember, setNewMembers] = useState({
       
    });

    useEffect(() => {
      

        
    }, [])

    
    const submitHandler = event => {
        event.preventDefault();
        props.setMembers([...props.members, newMember]);
        console.log(props.members)
    
    }
   


    const changeHandler = event => {
        setNewMembers({ ...newMember, [event.target.name] : event.target.value})
    };

    

    return (
        <form onSubmit = {submitHandler} >
           <label> Name <input type = "text" name ="name"  placeholder="name" onChange = {changeHandler}/></label>
           <label> Email <input type ="email" name ="email" placeholder="email" onChange = {changeHandler}/></label>
           <label> Role<input type = "text" name ="role"  placeholder="role" onChange = {changeHandler}/></label> 
           <button>Submit</button>
        </form>

    )

}

export default Form;