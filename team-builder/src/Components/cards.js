import React, {useState} from "react";


function Cards (props) {
    const {name, email, role, id} = props.member;

    const [editMember, setEditMember] = useState({
        name: name,
        email: email,
        role: role,
        id: id
    })

    const [editing, setEditing] = useState(false);

    const editHandler = event => {
        setEditing(!editing);
    }

    const inputHandler = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        setEditMember({...editMember, [event.target.name]: event.target.value})
    }

    const updateHandle = event => {
        event.preventDefault();
        props.edit(editMember);
        setEditing(false);
    }

    console.log("edit", editing)

    return editing ? (
        <form onSubmit = {updateHandle} >
           <label> Name <input type = "text" name ="name"  placeholder="name" onChange = {inputHandler} value = {editMember.name}/></label>
           <label> Email <input type ="email" name ="email" placeholder="email" onChange = {inputHandler} value = {editMember.email}/></label>
           <label> Role<input type = "text" name ="role"  placeholder="role" onChange = {inputHandler} value = {editMember.role}/></label> 
           <button>Submit</button>
        </form>
            ) : ( 
                <div>
                    <h3>Name</h3>
                    <p>{name}</p>
                    <h3>Email</h3>
                    <p>{email}</p>
                    <h3>Role</h3>
                    <p>{role}</p>
                    <button onClick = {editHandler}>Edit</button>
                </div>
    )


 
}

export default Cards;