import React from 'react'
import NavBar from '../Components/NavBar'

export default function Hotel() {
  return (
    <div>
    <NavBar></NavBar>
    <div class="container">
    <form>
      <h1>Hotel Booking</h1>
      <div class="input-group">
        <label for="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div class="check-in-out">
        <div class="input-group">
          <label for="check-in">Check-in</label>
          <input type="text" id="check-in" autocomplete="off" class="date-picker" />
        </div>
        <div class="input-group">
          <label for="check-out">Check-out</label>
          <input type="text" id="check-out" autocomplete="off" class="date-picker" />
        </div>
      </div>
      <div class="other">
        <div class="input-group">
          <label for="room">Room</label>
          <input type="number" id="room" min="1" />
        </div>
        <div class="input-group">
          <label for="adults">Adults</label>
          <input type="number" id="adults" min="0" />
        </div>
        <div class="input-group">
          <label for="kids">Kids</label>
          <input type="number" id="kids" min="0" />
        </div>
      </div>
    </form>
  </div>
    </div>
  )
}
