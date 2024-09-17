// import React from 'react'

// export default function State() {

//   return (
//     <div>

//     </div>
//   )
// }


//variable
const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"
const ADD_USER="ADD_USER"
// State
const initialCountState={
    count: 0,
}

const initialUserState={
    users:[
        {
            name:"sabbir",
        }
    ] 
}

// Action
const incrementCount =()=>{
return{
    type: INCREMENT,
}
}

const decrementCount =()=>{
    return{
        type: DECREMENT,
}
}

const addUser =()=>{
    return{
        type: ADD_USER,
        payload:{name:"rakib"},
}
}