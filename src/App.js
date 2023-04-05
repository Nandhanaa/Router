
import './App.css';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
    
    <h1 id="img1"><img src="https://static.wixstatic.com/media/0cff82_4dad67e7f22b4a20aa5abbcf1c70162f~mv2.png/v1/fill/w_386,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Take%20A%20Trip%20-%20Logo-1_edited.png" alt="Takeatrip"></img></h1>
    
    <NavBar></NavBar>
    <h2 id="img2"><img src="https://www.traveltrademaldives.com/assets/2020/07/vabbinfaru.jpg" width="1200" height="1000"alt="img2"></img></h2>
    
    <button type="button" class="collapsible" id="but1">Why TakeATrip?</button>
<div class="content">
  <p>Nurtured from the seed of a single great idea - to empower the traveller
   - TakeATrip is a pioneer in India's online travel industry. Founded in the year 2000 by Deep Kalra, TakeATrip came to life to empower the Indian traveller with instant bookings and comprehensive choices..</p>
   <button type="button" class="collapsible" id="but1">Booking Flights with TakeATrip?</button>
   <div class="content">
     <p>Customers can book, change, and cancel bookings easily via the Trip.com app or website, or by phone.
      Once booking is completed, customers can easily check the status of their flight (and for some flights, access a seat selection service) through the Trip.com website or customer service hotline.</p>
</div>
<button type="button" class="collapsible" id="but1">Is it Cheaper to Book tickes in TakeATrip at Last Min?</button>
   <div class="content">
     <p>If you book flight tickets at last minute, you will end up getting huge difference between the fares.
      Airlines usually increase the fare last minute by understanding the fact that last minute booking is done in the case of emergency and travelers definitely book their flights despite the airfares are quite high.</p>
</div>



    </div>
    </div>
  );
}

export default App;

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length ; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

