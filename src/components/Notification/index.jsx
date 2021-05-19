import React, { useState } from 'react';
import './Notification.scss';
import { AiOutlineBell } from "react-icons/ai";
import NotificationItem from './NotificationItem';



function Notification(props) {
    const [toggle, setToggle] = useState(false)
    function handleToggle(e) {
        e.preventDefault();
        const newToggle = !toggle;
        setToggle(newToggle)
    }

    return (
        <div className="notification">
            <button className="button" onClick={handleToggle}>
                <span className="bell">
                    <AiOutlineBell />
                </span>
                <span className="bell-number">3</span>
            </button>

            <NotificationItem toggle={toggle} />

        </div>

    );
}

export default Notification;