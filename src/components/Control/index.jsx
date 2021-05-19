import { React, useState } from 'react';
import Slider from 'react-input-slider';
import './Control.scss';

import { FaRandom, FaFastForward, FaFastBackward, FaPause, FaVolumeUp } from 'react-icons/fa';
import { RiRepeatFill } from 'react-icons/ri';


function Control(props) {
    const [range, setRange] = useState({ x: 0, y: 10 });

    return (
        <div className="control">
            <div className="control-container flex">
                <div className="item btn-prev">
                    <button className="control-button">
                        <FaFastBackward />
                    </button>
                </div>
                <div className="item btn-play">
                    <button className="control-button">
                        <FaPause />
                    </button>
                </div>
                <div className="item btn-next">
                    <button className="control-button">
                        <FaFastForward />
                    </button>
                </div>
                <div className="item btn-range">
                    <Slider
                        axis="x"
                        x={range.x}
                        onChange={({ x }) => setRange(range => ({ ...range, x }))}
                    />
                </div>
                <div className="item time">00:00</div>
                <div className="item time">00:00</div>
                <div className="item btn-mute">
                    <button className="control-button">
                        <FaVolumeUp />
                    </button>
                </div>
                <div className="item btn-mute">
                    <button className="control-button">
                        <FaRandom />
                    </button>
                </div>
                <div className="item btn-mute">
                    <button className="control-button">
                        <RiRepeatFill />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Control;