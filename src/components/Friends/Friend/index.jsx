import React from 'react';

function Friend(props) {
    const { user } = props;

    return (
        <li>
            <div className="friend">
                <div className="img">
                    <img src="/img/avatar.png" alt="" />
                    <span className={`status ${user.status}`}></span>
                </div>
                <div className="info">
                    <a href="/" className="name">{user.name}</a>
                    <span className="from">{user.from}</span>
                </div>
            </div>
        </li>
    );
}

export default Friend;