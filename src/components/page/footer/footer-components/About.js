import React from 'react';

import './FooterComponents.css'

const About = () =>{

    return(
        <div>
            <div className="footer-title" data-toggle="collapse" data-target="#about" aria-expanded="false" aria-controls="about">
            <h6>About</h6> <i class="fas fa-caret-down"></i>
         </div>
        <div class="collapse" id="about">
        <div className='footer-inner'>
        <p>Gift Card</p>
        <p>Card Balance Enguiry</p>
        <p>FAQ</p>
        </div>
        </div>
        </div>
    )
}

export default About;