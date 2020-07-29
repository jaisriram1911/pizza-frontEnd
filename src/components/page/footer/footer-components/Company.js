import React from 'react';

import './FooterComponents.css'

const Company = () =>{

    return(
        <div>
            <div className="footer-title" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <h6>COMPANY</h6> <i class="fas fa-caret-down"></i>
         </div>
        <div class="collapse" id="collapseExample">
        <div className='footer-inner'>
        <p>Blog</p>
        <p>FeedBack</p>
        <p>Ads</p>
        </div>
        </div>
        </div>
    )
}

export default Company;