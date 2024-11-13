
import React from 'react'
import ResponsiveTable from '../Components/ResponsiveTable'

function Registration() {
  return (
   <div id='registration'>
    <div className=' text-white w-screen h-screen' style={{backgroundColor:"#2b3c63"}}>
    <h1 className='pt-auto text-6xl text-extrabold text-center'>Registration</h1>
    <div><p className='text-black text-bold text-3xl mt-16 mb-14 text-center'>
    At least one author of an accepted paper must register and present his / her paper at the conference.<br></br>
    <span className='' style={{backgroundColor:"yellow"}}>Only accepted, registered, and presented papers will be considered for publication.</span>
  </p></div>
  <div className='ml-24 mr-24'>
  <h1 className='text-black text-bold text-3xl mb-6'> Registration Fees</h1>
  <ResponsiveTable/></div>
  </div>
   </div>
  )
}
export default Registration;