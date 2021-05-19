import React from 'react';

function ProfileItem(props) {
    const { toggle } = props;

    return (
        <div className={toggle ? "box show" : "box"}>
            <ul>
                <li><a href="/">Setting</a></li>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Notification <span className="number">3</span></a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    );
}

export default ProfileItem;