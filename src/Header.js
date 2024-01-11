import React, { useState } from "react"


function Header(props) {
    const defaultName="abhishek"
    const changeName="abhishek Rajbhar"
    const [name,setName]=useState(defaultName);
    return (
        <>
      <div className="Header ">
        <h1 className="text-3xl font-bold flex justify-center ">Hello {name}  from {props.country}</h1>
        <h1>Hello {name}</h1>
        <button className="" onClick={()=>
            name===defaultName?setName(changeName):setName(defaultName)}> Click me to change</button>
            <button onClick={()=> setName=(changeName)}>click</button>
      </div>
        </>
    );
  }

  export default Header;