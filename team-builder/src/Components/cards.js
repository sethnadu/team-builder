import React from "react";


function Cards (props) {

    console.log(props.members);  
    return (
        <div>
            {props.members.map((member) => {
               return(<div className ="card" key = {member.name}>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <h3>{member.email}</h3>
                <button onClick = {() => props.setMemberToEdit(member)}>Edit</button>
                </div>) 
            })}  
        </div>

    )

}

export default Cards;