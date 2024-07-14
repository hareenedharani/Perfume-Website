import React from 'react';
import './Footer.css';
import femiga_logo from '../Assets/femiga-logo-2.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={femiga_logo} alt="Femiga Logo" />
                
            </div>
            <div className="footer-section">
                <h2>INFORMATION</h2>
                <hr className='hr'/>
                <ul>
                    <li><a href="#contact-us">Contact Us</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#care-tips">Care & Tips</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>PRODUCTS</h2>
                <hr className='hr'/>
                <ul>
                    <li><a href="#perfumes">Perfumes</a></li>
                    <li><a href="#attar">Attar</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>CONTACT</h2>
                <hr className='hr'/>
                <address>
                    <strong>Mitshti Bags</strong><br />
                    150, Abdul Rehman Street, Ground Floor,
                    Mumbai-400003
                </address>
                <address>
                    <strong>Femiga Bags</strong><br />
                    151/155, 1st Floor, Sarang Street,
                    Mumbai-03
                </address>
                <p className='mail'>Email: <a href="mailto:info@femigabags.com" style={{textDecoration: 'none'}} className='info'>info@femigabags.com</a></p>
            </div>
            <div className="footer-section">
                <h2>FOLLOW US</h2>
                <hr className='hr'/>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2018 Femiga | All rights reserved | Designed by Inspire Infotech</p>
            </div>
        </footer>
    );
}

export default Footer;