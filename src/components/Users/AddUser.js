import {useRef, useState} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel'
import classes from "./AddUser.module.css"
const AddUser = (props) => {
    const nameinputRef=useRef("");
    const ageinputRef=useRef("");
    // const [enteredUserName,setEnteredUserName]=useState("")
    // const [enteredAge,setEnteredAge]=useState("")
    const [error,setError]=useState()

    // const userNameChangeHandler=(event)=>{
    //     setEnteredUserName(event.target.value)
    // }
    // const ageChangeHandler=(event)=>{
    //     setEnteredAge(event.target.value)
    // }

    const addUserHandler=(event)=>{
        event.preventDefault()
        // console.log(enteredUserName,enteredAge)
        let enteredUserName = nameinputRef.current.value;
        let enteredAge = ageinputRef.current.value;

        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
        {
            setError(
                {
                    title:"Field is Required",
                    message:"Please enter the non-empty value"
                }
            )
            return;
        }
        if(enteredAge<0){
            setError(
                {
                    title:"non-negative age",
                    message:"Please enter the non-negative age"
                }
            )
            return;
        }
        

        props.onAddUser(enteredUserName,enteredAge)
        nameinputRef.current.value="";
        ageinputRef.current.value="";
    //     setEnteredUserName("")
    //     setEnteredAge("")
    
}
    const confirmHandler=()=>{
        setError(null)
    }
  return (
    <div>
        {error && (<ErrorModel title={error.title} message={error.message} onConfirm={confirmHandler}></ErrorModel>

        )}
        
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username"  
            // onChange={userNameChangeHandler} 
            // value={enteredUserName}
            ref={nameinputRef}
            />
            <label htmlFor="age">age(Year)</label>
            <input type="number" id="age" 
            //  onChange={ageChangeHandler}
            //   value={enteredAge}
            ref={ageinputRef}
            />
            <Button type="submit" > Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUser;
