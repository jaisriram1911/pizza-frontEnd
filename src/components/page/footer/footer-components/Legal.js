import React from 'react';

import './FooterComponents.css'

const Legal = () =>{

    return(
        <div>
            <div className="footer-title" type="button" data-toggle="collapse" data-target="#Legal" aria-expanded="false" aria-controls="Legal">
            <h6>Legal</h6> <i class="fas fa-caret-down"></i>
         </div>
        <div class="collapse" id="Legal">
        <div className='footer-inner'>
        <p>Disclaimer</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        </div>
        </div>
        </div>
    )
}

export default Legal;