import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const PersonList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {people, setPeople}=props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/people") //get all ppl method from the backed
        .then((res)=>{
            console.log(res.data)
            setPeople(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[]) //adding empty array so the page doesnt keep making api requests
  return (
    <div>
        {
            people.map((person, index)=>{
                return <div key={index}>
                            <p>{person.lastName}, {person.firstName}</p>

                <Link to={`/people/${person._id}`}>{person.firstName} {person.lastName}'s page!</Link>
                        </div>
            })
        }
    </div>
  )
}

export default PersonList