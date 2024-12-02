import {useState} from "react" 
// use state ko hooks bolte hai 


function App() {

  const [color, setColor] = useState("olive")

  return (
 
      <div className = "w-full h-screen duration-200"
       style ={{backgroundColor : color}}
       >
<h1>Sachin</h1>
        

         <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px -2">

          <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
          <button
          onClick ={()   => setColor("red")}
            className = "outline-none px -4  py- 1  rounded -full text- white shadow -lg "
            style = {{backgroundColor :  "red"}}>  Red </button>
                <button
                 onClick ={()   => setColor("green")}
            className = "outline-none px -4  py- 1  rounded -full text- white shadow -lg "
            style = {{backgroundColor :  "green"}}>  Green  </button>
                <button
                 onClick ={()   => setColor("blue")}
            className = "outline-none px -4  py- 1  rounded -full text- white shadow -lg "
            style = {{backgroundColor :  "Blue"}}>  Blue </button>
          </div>


         </div>
      </div>

    
  )
}

export default App
