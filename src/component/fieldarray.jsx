import React from "react";
import { useState } from "react";
import axios from "axios";

 
 function Son() {
  const url = "http://localhost:3000/user"

  const[child, setChild]=useState([{childs:''}]); 
  console.log(child)

  const handleChildrenAdd=()=>{
    setChild([...child,{childs:''}])
  }
  const handleChildrenRemove=(index)=>{
    const list=[...child]
    list.splice(index,1);
    setChild(list)
    
  };
  const handleChildrenChange=(e,index)=>{
      const {name,value}=e.target
      const list=[...child];
      list[index][name]=value;
      setChild(list);
  }

   return (
    <form className="CHILDRENS" autoComplete="off">
     <div className="form-field">
      <label htmlFor="childs">CHILDS</label>
        {child.map((singleChild,index)=> 
      ( 
        <div  key={index} className="child1">
          <div className="box1">
            <input name="childs" type="text" id="childs" value={singleChild.childs}
            onChange={(e)=>handleChildrenChange(e,index)}/>
            {child.length-1 === index &&  
              (<button
               type="button"
               className="add-btn"
               onClick={handleChildrenAdd}
                >+ </button>
              )
            }
          </div>
          <div className="box2">
            {child.length>1 &&
             ( 
              <button 
              type="button" 
              className="remove-btn"
              onClick={handleChildrenRemove}>-</button>
             )
            }
            
          </div>
        </div>
      )
      
      )}
      
      </div>
      </form>
   )
 }
 
 export default Son;