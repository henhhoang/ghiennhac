import React from 'react';
import NavCpn from '../NavCpn'
import Product from '../Product';
import Friends from '../Friends';
import './Wapper.scss'

function Wapper(props) {
    return (
        <div className="wapper">
            <NavCpn />
            <Product />
            <Friends />
        </div>
    );
}

export default Wapper;