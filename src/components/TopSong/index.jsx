import React from 'react';
import './TopSong.scss'

function TopSong(props) {

    return (
        <li>
            <a href="/">
                <span className="avatar">
                    <img src="/img/avatar.png" alt="" />
                </span>
                <div className="box">
                    <span className="name-song">Liitle Town</span>
                    <span className="singer">by Chris Fox</span>
                </div>
                <span className="top-number">{props.top}</span>
            </a>
        </li>
    );
}

export default TopSong;