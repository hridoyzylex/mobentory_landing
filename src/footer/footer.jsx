import React from 'react';
import './footer.css';

const Footer=()=> {
  return (
    <div className="footer">
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>Address</h4>
                    <a href="/employer">
                        <p>+8801790826633</p>
                    </a>
                    <a href="/healthplan">
                        <p>info@mobentory.com</p>
                    </a>
                    <a href="/individual">
                        <p>161/B (1st Floor) Lake Circus, Kalabagan, Dhaka</p>
                    </a>

                </div>
                <div className="sb__footer-links_dev">
                    <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource Center</p>
                    </a>
                    <a href="/resource">
                        <p>Testtimonials</p>
                    </a>
                    <a href="/resource">
                        <p>STV</p>
                    </a>

                </div>
                <div className="sb__footer-links_div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Teamexus Solutions Ltd. </p>
                        <p>Inovative Solutions Ltd. </p>
                        <p>AADD </p>
                    </a>

                </div>
                <div className="sb__footer-links_div">
                <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                   
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact</p>
                    </a>

                </div>
            </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
            <p>Design & Developed by <a href="http://www.teamexus.com" target="blank">Teamexus Solutions Ltd.</a> | Copyright © {new Date().getFullYear()}- All Rights Reserved.</p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer;
