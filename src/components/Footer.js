import React from "react";
import Form from 'react-bootstrap/Form';

function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <h1><i class="fa-brands fa-apple"></i> I-SHOP</h1>
                <a href="#"><h4>Home</h4></a>
                <ul>
                    <p>Products</p>
                    <li><a href="#mac-card">Macbook</a></li>
                    <li><a href="#ipad-card">iPad</a></li>
                    <li><a href="#iphone-card">iPhone</a></li>
                    <li><a href="#airpods-card">Airpods</a></li>
                    <li><a href="#watch-card">WATCH</a></li>
                </ul>
                <img src="https://www.apple.com/v/macbook-pro-13/m/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg" />
            </div>

            <div className="social-icons">
                <a href="https://twitter.com/madhushanmukh" target="blank" class="fa fa-twitter"></a>
                <a href="https://www.facebook.com/login/" target="blank" class="fa fa-facebook"></a>
                <a href="https://www.instagram.com/?hl=en" target="blank" class="fa fa-instagram"></a>
                <a href="https://github.com/ShanmukhSaiMadhu" target="blank" class="fa fa-github"></a>

                <p>© 2022 ShanmukhSaiMadhu. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer