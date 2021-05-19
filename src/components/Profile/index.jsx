import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import './Profile.scss';
import ProfileItem from './ProfileItem'


function Profile(props) {
    const location = props.location;

    const [toggle, setToggle] = useState(false)
    function handleToggle(e) {
        e.preventDefault();
        const newToggle = !toggle;
        setToggle(newToggle)
    }

    return (
        <div className={`profile ${location}`} onClick={handleToggle}>
            <div className={`profile-container`}>
                <button className="name">John.Smith <AiFillCaretDown /></button>
                <span className="avatar">
                    <img src="/img/avatar.png" alt="" />
                </span>
            </div>
            <ProfileItem toggle={toggle} />
        </div>
    );
}

export default Profile;