import React, { Component, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { itemTotal } from "../cart/cartHelpers";
import { signout, isAuthenticated } from "../../auth/index";
import './Menu.css'

const isActive=(history, path)=>{
    if (history.location.pathname === path) {
        return { color: "#E7305B" };
    } else {
        return { color: "#363636" };
    }
}
 
const Menu = ({history}) =>{
    
        return (
            <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand logo-size" href="/">Pizza store </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div class="collapse absolute navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Order Online
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "#")}
                    to="#"
                >
                    Contact us
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/admin/dashboard"
                        style={isActive(history, "/admin/dashboard")}
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>
            )}

            {isAuthenticated() && (
                
                    <button
                        className="navButton"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </button>
                
            )}
        </ul>
        </div>
        </nav>
)
}

export default withRouter(Menu);