import React from 'react';

import './footer.css'
import Company from './footer-components/Company'
import FooterHeading from './footer-middleWare/Heading-footer'
import FooterContent from './footer-middleWare/ContentFooter'
import About from './footer-components/About';
import Legal from './footer-components/Legal'
import SocialMedia from './footer-components/SocialMedia'

const Footer = props =>{
    return(
        <div className='footer-component'>
        <div className='mobile-view'>
          <Company />
          <About />
          <Legal />
          <SocialMedia />
        </div>
        <div className='main-footer'>
          <div>
            <FooterHeading footerHeading='COMPANY' />
            <FooterContent footerContent='Blog' />
            <FooterContent footerContent='FeedBack' />
            <FooterContent footerContent='Ads' />
          </div>
          <div>
            <FooterHeading footerHeading='ABOUT' />
            <FooterContent footerContent='Gift Card' />
            <FooterContent footerContent='Card Balance Enguiry' />
            <FooterContent footerContent='FAQ' />
          </div>
          <div>
            <FooterHeading footerHeading='Legal' />
            <FooterContent footerContent='Disclaimer' />
            <FooterContent footerContent='Terms & Conditions' />
            <FooterContent footerContent='Privacy Policy' />
          </div>
          <div>
            <FooterHeading footerHeading='SOCIAL MEDIA' />
            <span className='social'>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            </span>
          </div>
        </div>
</div>
    )
}

export default Footer;