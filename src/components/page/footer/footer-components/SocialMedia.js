import React from 'react';

import './FooterComponents.css'

const SocialMedia = () =>{

    return(
        <div>
            <div className="footer-title" data-toggle="collapse" data-target="#social" aria-expanded="false" aria-controls="social">
            <h6>Social Media</h6> <i  class="fas fa-caret-down"></i>
         </div>
        <div class="collapse" id="social">
        <div className='footer-inner'>
        <p><i class="fab fa-facebook"></i></p>
        <p><i class="fab fa-instagram"></i></p>
        <p><i class="fab fa-twitter"></i></p>
        </div>
        </div>
        </div>
    )
}

export default SocialMedia;