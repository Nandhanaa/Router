import React from 'react'
import NavBar from '../Components/NavBar'

export default function Flight() {
  return (
    <div className='fday'>
    <NavBar></NavBar>
    <h1>Book Domestic and International Flight Tickets</h1>
    <img src="https://pirg.org/edfund/wp-content/uploads/2020/07/Airplane.jpg" alt="imag1"  id="img3"></img>
    <br></br>
    <br></br>
    
    <input type="text" id="f1" name="firstname" placeholder="From...."  height="70" width="100"/>===<input type="text" id="f1" name="To" placeholder="To..."  height="70" width="70"/><br></br>
    <br></br>
    <br></br>
    <input type="text" id="f1" name="firstname" placeholder="Departure date"  height="70" width="100"/>===<input type="text" id="f1" name="To" placeholder="Departure Time"  height="70" width="70"/>
    <br>
    </br>
    <br>
    </br>
    <input type ="submit" id="f1" value="Search Flights" ></input>

   
    </div>
  )
}

