import React, {useState} from "react";





function Form (props) {
        console.log(props);

    const [newMember, setNewMembers] = useState({
        name: "",
        email: "",
        role: "",
        id: null
    });


    
    const submitHandler = event => {
        event.preventDefault();
        props.add({...newMember, id: Math.random()})
        setNewMembers({
            name: "",
            email: "",
            role: "",
            id: null,
        })
        // props.setMembers({...props.members, newMember, id: Math.random()});
       
    
    }
   


    const changeHandler = event => {
        setNewMembers({ ...newMember, [event.target.name] : event.target.value})
    };

    

    return (
        <form onSubmit = {submitHandler} >
           <label> Name <input type = "text" name ="name"  placeholder="name" onChange = {changeHandler} value = {newMember.name}/></label>
           <label> Email <input type ="email" name ="email" placeholder="email" onChange = {changeHandler} value = {newMember.email}/></label>
           <label> Role<input type = "text" name ="role"  placeholder="role" onChange = {changeHandler} value = {newMember.role}/></label> 
           <button>Submit</button>
        </form>

    )

}

export default Form;