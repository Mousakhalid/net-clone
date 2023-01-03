import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false)
    const transitionNav = () => {
        if (window.scrollY > 100) { 
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNav)
        return () => { window.removeEventListener("scroll", transitionNav) }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img className="nav__avatar" src="https://i.pinimg.com/564x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg" alt="" />
            </div>
        </div>
    );
}

export default Nav;
