import React from 'react'
import WeatherApi from './WeatherApi'

const Main = () => {
  return (
    <div>
       <WeatherApi/>
      {/* <NasaApi/>  */}
      {/* <Click/> */}
      {/* <Hover/> */}
      {/* <Usecallback/> */}
    </div>
  )
}

export default Main

//? useMemo
// import React, { useMemo, useState } from 'react'

// const Main = () => {
//   let [count,setCount]=useState(0)
//   let [todo,setTodo]=-useState([])
//   let calculation =useMemo(()=>
//     ExpensiveCalculation(count),[count]
//   )
//   let Increment=()=>{
//     setCount((count)=>count+1)
//   }
//   return (
//     <div>
//       <h1>My Todo Application</h1>
//       {todo.map((ele,index)=>{  })}
//     </div>
//   )
// }

// export default Main

// import React from 'react'
// import Usecallback from './Usecallback'


// const Main = () => {
//   return (
//     <div>
//       <Usecallback/>
//     </div>
//   )
// }
// export default Main

