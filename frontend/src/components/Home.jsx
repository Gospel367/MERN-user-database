import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


export const Home = () => {

    
    const [data, setData] = useState([])

    async function getData(){
        const data = await axios.get("http://localhost:5000");
        setData(data.data)
        console.log(data.data)
    }

    useEffect(() => {
      getData()
      
    }, [])
    
    console.log(data)
  return (
    <div>
        <section>
            <h3>The Students List</h3>
            { data.map((item) => (
                <ul key = {item._id} className='datalist'>
                    <li>{item.name}</li>
                    <li>{item.classname}</li>
                    <li>{item.school}</li>
                    <li>{item.age}</li>
                        <ul className='buttonlist' style={{}}>
                        <li>

                    <Link to={`/update/${item._id}`}><button  >Edit Profile</button></Link>
                        </li>
                        <li>
                    <Link to={`/detail/${item._id}`}><button>View Profile</button></Link>
                    </li>
                    <li>
                   <button onClick={ async ()=> {
                        await axios.delete(`http://localhost:5000/${item._id}`);
                        getData();
                    }}>Delete Profile</button>
                    </li>

                    </ul>
                </ul>
            ))}
        </section>
    </div>
  )
}
