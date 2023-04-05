import React from 'react'
import NavBar from '../Components/NavBar'

export default function Train() {
  return (
    <div id="Train1">
    <NavBar></NavBar>

  

    <h1>Book your train Tickets!...</h1>
<p>Name     <input type="text" size="20" maxlength="99" /></p>
<p>Age      <input type="text" size="12" maxlength="99" /></p>
<p>Address  <input type="text" size="42" maxlength="99" /></p>
<p>Email    <input type="text" size="30" maxlength="99" /></p>
<p>Telephone<input type="text" size="10" maxlength="99" /></p>
<p>select your berth
<select name="choices" size="3">
<option>tatkal</option>
<option>ladies</option>
<option>genral</option>
</select></p>

<input type="submit" value="click here to submit" />
<input type="reset" value="clear this form" />
</div>

    
  )
}
