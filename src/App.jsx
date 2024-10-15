
import { useState } from 'react'
import './App.css'



function App(){
  const[color,setColor]=useState('white')

//js code
return(
  //jsx code
    <>
  <div  style={{height:'100vh',background:color}}>
    <h1 style={{textAlign:'center',fontSize:'50px',fontWeight:'700',color:'white'}}>Background Changer App</h1>
  <div style={{display:'flex',justifyContent:'space-evenly' ,marginTop:'500px'}}>
  <button onClick={()=>setColor("black")} style={{padding:'10px 15px',borderRadius:'10px',background:'black',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold '>Black</button>
  <button onClick={()=>setColor("red")}  style={{padding:'10px 15px',borderRadius:'10px',background:'red',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Red</button>
  <button onClick={()=>setColor("blue")}   style={{padding:'10px 15px',borderRadius:'10px',background:'blue',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Blue</button>
  <button onClick={()=>setColor("pink")}   style={{padding:'10px 15px',borderRadius:'10px',background:'pink',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Pink</button>
  <button onClick={()=>setColor("sienna")}   style={{padding:'10px 15px',borderRadius:'10px',background:'sienna',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Sienna</button>
  <button onClick={()=>setColor("green")}   style={{padding:'10px 15px',borderRadius:'10px',background:'green',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Green</button>
  <button onClick={()=>setColor("blueviolet")}   style={{padding:'10px 15px',borderRadius:'10px',background:'blueviolet',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold '>Violet</button>
  <button onClick={()=>setColor("Magenta")}   style={{padding:'10px 15px',borderRadius:'10px',background:'Magenta',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >Maganta</button>
  <button onClick={()=>setColor("midnightblue")}   style={{padding:'10px 15px',borderRadius:'10px',background:'midnightblue',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >MidnightBlue</button>
  <button onClick={()=>setColor("maroon")}   style={{padding:'10px 15px',borderRadius:'10px',background:'maroon',color:'white',border:'none',fontWeight:'600'}} className='text-md  font-bold ' >OrangeRed</button>



  </div>
  </div>
    </>
    )
    
  }
export default App
