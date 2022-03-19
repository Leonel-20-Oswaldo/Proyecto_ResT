import React from "react";

export default function Greeting(props) {
    const {groupinfo, fuction} = props
    const {grupo, day } = groupinfo
    console.log(props)
    console.log(props.groupinfo)
    console.log(grupo) 
    console.log(day) 
    
    
  return (
    <div>
        <h2>Hola a todos</h2>
      <button onClick={() => fuction (grupo)}>Greeting</button>
    </div> 
  )
}

export function Goodbye(){
    return(
        <div>
            <h3> Nos vemos mañana</h3>
        </div>
    )
}