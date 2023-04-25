import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export const Signup = () => {

    const goThere = useNavigate();

    const initial = {name: "", classname: "", school: "", age: ""}
    const [val, setVal] = useState(initial)

    const {name, classname, school, age} = val;

    function handleChange(e){
        const {name, value} = e.target;
        setVal({...val, [name]: value})        

    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(val)
        const post = await axios.post("http://localhost:5000/", val);
        if (post){
            console.log('successful')
        }else{
            console.log('error')
        }
        goThere("/")
        
    }

  return (
    <div>
         <section>
            <h5>Signup Form </h5>
            <form>
                <div className='input'>
                <label>Name</label>
                <input value={name} name = "name" type='text' onChange={(e) => handleChange(e)} ></input>
                </div>
                <div className='input'>
                <label>className   </label>
                <input type='text' name = "classname" value ={classname} onChange={(e) => handleChange(e)}></input>
                </div>
                <div className='input'>
                <label>School   </label>
                <input type='text' name = "school" value={school} onChange={(e) => handleChange(e)}></input>
                </div>
                <div className='input'>
                <label>Age  </label>
                <input type='text' name = "age" value={age} onChange={(e) => handleChange(e)}></input>
                </div>
                <button onClick={(e) => handleSubmit(e)}>Submit Data</button>

            </form>
        </section>
    </div>
  )
}

