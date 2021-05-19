import React from 'react';
import { BsEnvelope } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import './NotificationItem.scss';

function NotificationItem(props) {
    const { toggle } = props;

    return (
        <div className={toggle ? "notification-form show" : "notification-form"}>

            <h4>You have <strong>3</strong> notifications</h4>

            <div className="form">
                <a href="/" className="group">
                    <span className="img avatar">
                        <BsEnvelope />
                    </span>
                    <span className="content">
                        <span>Sophi sent you a email</span>
                        <br></br>
                        <small>1 minutes ago</small>
                    </span>
                </a>
                <a href="/" className="group">
                    <span className="img avatar">
                        <BsEnvelope />
                    </span>
                    <span className="content">
                        <span>Sophi sent you a email</span>
                        <br></br>
                        <small>1 minutes ago</small>
                    </span>
                </a>
                <a href="/" className="group">
                    <span className="img avatar">
                        <BsEnvelope />
                    </span>
                    <span className="content">
                        <span>Sophi sent you a email</span>
                        <br></br>
                        <small>1 minutes ago</small>
                    </span>
                </a>
            </div>

            <div className="setting">
                <span>See all the notifications</span>
                <button className="cog"><FaCog /></button>
            </div>
        </div>
    );
}

export default React.memo(NotificationItem);