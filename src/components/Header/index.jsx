import React, { useContext } from "react";
import './Header.scss'
import { FaHeadphones } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import Notification from "../Notification"
import Profile from "../Profile";
import { AuthContext } from "../../contexts/AuthContext";


function Header(props) {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return (
        <header>
            <div className="header">
                <button className={isAuthenticated ? "home open" : "home"}><FaHeadphones /><span>Musik</span></button>
                <button
                    className="toggle-header"
                    onClick={toggleAuth}
                >
                    {isAuthenticated ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </button>
                <form className="search">
                    <button className="button"><AiOutlineSearch /></button>
                    <input className="input-search" type="input" placeholder="Search songs, ablums" />
                </form>
                <div className="left">
                    <Notification />
                    <Profile location={"top"} />
                </div>
            </div>
        </header>
    );
}

export default Header;