import React , {useState}from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [people, setPeople]=useState([]) 
    //lifting state so the children can use it and siplay the data via props
  return (
    <div>
        <PersonForm people={people} setPeople={setPeople}/>
        <PersonList people = {people} setPeople={setPeople}/>

    </div>
  )
}

export default Main;