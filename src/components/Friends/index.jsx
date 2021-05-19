import React, { useState } from 'react';
import Friend from './Friend';
import './Friends.scss';

function Friends(props) {
    const [user] = useState([
        {
            id: 1,
            name: "Chris Torres",
            from: "New York",
            status: "Error"
        },
        {
            id: 2,
            name: "LorenTino",
            from: "TaiWan",
            status: "Warning"
        },
        {
            id: 3,
            name: "Kill Groth",
            from: "Hong Kong",
            status: "Success"
        },
        {
            id: 4,
            name: "ButterFly",
            from: "Porland",
            status: "Warning"
        },
        {
            id: 6,
            name: "Yasuo",
            from: "Japan",
            status: "Error"
        },
        {
            id: 7,
            name: "Micheal",
            from: "America",
            status: "Success"
        },
        {
            id: 8,
            name: "Baloteli",
            from: "New Zeland",
            status: "Warning"
        },
        {
            id: 9,
            name: "Benner",
            from: "New York",
            status: "Error"
        },
        {
            id: 10,
            name: "Millo",
            from: "Viet Nam",
            status: "Success"
        },
        {
            id: 11,
            name: "Perres",
            from: "Italia",
            status: "Warning"
        },
        {
            id: 12,
            name: "Pepe",
            from: "Spain",
            status: "Error"
        },
        {
            id: 13,
            name: "Eto",
            from: "Arica",
            status: "Warning"
        },
        {
            id: 14,
            name: "Ronaldo",
            from: "Arica",
            status: "Success"
        },
        {
            id: 15,
            name: "Messi",
            from: "Arica",
            status: "Warning"
        },
        {
            id: 16,
            name: "Coutinho",
            from: "Arica",
            status: "Error"
        }
    ])

    return (
        <div className="friends">
            <span className="connected">Connected</span>
            <ul>
                {user.map((user) => <Friend user={user} key={user.id} />)}
            </ul>

        </div>
    );
}

export default Friends;