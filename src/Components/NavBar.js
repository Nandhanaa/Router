import React from 'react';
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div>
            <div id="name">
                <div className='navbar-menu'>
                    <Link to="/">Home</Link>
            
<span></span>
                   <Link to="/flight">Flight</Link><span></span>
                   <Link to="/train">Train</Link>
                   <Link to="/hotel">Hotel</Link>
                    <Link to="/bus">Bus</Link>
                 
                </div>
            </div>
        </div>
    );
}

