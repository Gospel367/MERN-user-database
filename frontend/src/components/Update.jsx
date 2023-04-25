import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'




export const Update = () => {
  const {id} = useParams();

  const goThere = useNavigate();

  const [val, setVal] = useState({});
  const {name, classname, school, age} = val;

  async function getOne(){
    const data = await axios.get(`http://localhost:5000/${id}`);
    setVal(data.data);

    if(!data){
      console.log("Resource not found")
    }
    console.log("One data found")
  }


  useEffect(() => {
    getOne();
  }, [])
  


  function handleChange(e){
    const {name, value} = e.target;
    setVal({...val, [name]: value})        

}

async function handleSubmit(e){
    e.preventDefault();
    console.log(val)
    const post = await axios.put(`http://localhost:5000/${id}`, val);
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
            <h5>Update Form </h5>
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
