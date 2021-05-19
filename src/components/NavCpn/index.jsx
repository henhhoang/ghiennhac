import React, { useContext } from 'react';
import { FaMusic, FaBox, FaList } from 'react-icons/fa';
import { GiCompactDisc } from 'react-icons/gi';
import { FiYoutube } from 'react-icons/fi';
import './NavCpn.scss';
import { AuthContext } from "../../contexts/AuthContext";
import Profile from "../Profile";

function Nav(props) {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className={`nav-container ${isAuthenticated && "open"}`}>
            <nav className="nav-Left">
                <span className="discover">Discover</span>
                <ul>
                    <li>
                        <a href="/" className="link">
                            <span className="img" style={{ color: "#1ab667" }}>
                                <GiCompactDisc />
                            </span>
                            <span className="text">What's New</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="link">
                            <span className="img" style={{ color: "#4cb6cb" }}>
                                <FaMusic />
                            </span>
                            <span className="text">Genres</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="link">
                            <span className="img" style={{ color: "#e8eff0" }}>
                                <FaBox />
                            </span>
                            <span className="text">Events</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="link">
                            <span className="img" style={{ color: "#788188" }}>
                                <FaList />
                            </span>
                            <span className="text">Listen</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="link">
                            <span className="img" style={{ color: "#f05050" }}>
                                <FiYoutube />
                            </span>
                            <span className="text">Youtube</span>
                        </a>
                    </li>
                </ul>
            </nav >
            <Profile location={"bottom"} />
        </div>
    );
}

export default Nav;