import React from 'react'
import NavBar from '../Components/NavBar'

export default function Bus() {
  return (
    <div>
    <NavBar></NavBar>
    <form >
  
  <div class="form-group">
    <h2 class="heading">Booking & contact</h2>
   
    <div class="controls">
    <label for="name">Name</label>
      <input type="text" id="name" class="floatLabel" name="name" />
    
    </div>
    <div class="controls">
    <label for="email">Email</label>
      <input type="text" id="email" class="floatLabel" name="email" />
      
    </div>       
    <div class="controls">
    <label for="phone">Phone</label>
      <input type="tel" id="phone" class="floatLabel" name="phone" />
      
    </div>
    <div class="controls">
    <label for="phone">Location</label>
      <input type="tel" id="phone" class="floatLabel" name="phone" />
      
    </div>
      
       
      
  
  
		<button type="submit">Book</button>
  </div> 
  </form>
    </div>
  )
}
