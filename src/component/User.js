import React from "react";
import { useState,useEffect } from 'react';

 function Ravi() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/user").then((result)=>{
      result.json().then((resp)=>{
      setData(resp)
    })
   })
  },[])
  return (
    <div className="api">
      <h1>get api</h1>
      {
        data.map((item)=>
        <div>
         <h4>Name:{item.name}</h4>
          <p>{item.gender}</p>
          <p>{item.category}</p>
          <p>{item.Religion}</p>
          <p>{item.dob}</p>
          <p>{item.Father}</p>
          <p>{item.mother}</p>
          <p>{item.spouse}</p>
          <p>{item.children}</p>
          <p>{item.number}</p>
          <p>{item.email}</p>
          <p>{item.degree}</p>
          <p>{item.course}</p>
          <p>{item.startyear}</p>
          <p>{item.endyear}</p>
        </div>
        )
      }
    </div>
  )
}
export default Ravi;

