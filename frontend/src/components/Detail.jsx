import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Detail = () => {

    const {id} = useParams();

    const [data, setData] = useState({})
    const {name, classname, school, age} = data;


    async function getData(){
        const data = await axios.get(`http://localhost:5000/${id}`);
        console.log(data.data)
        console.log(id)
        setData(data.data)
    }

    useEffect(() => {
      getData()
      
    }, [])
    
  return (
    <div>
        <section>
        <h5>{`User Data for ${name}`}</h5>
        <p>The name of the student above is {name} and he is in {classname} in {school} and he is {age} years old </p>
        </section>
    </div>
  )
}
