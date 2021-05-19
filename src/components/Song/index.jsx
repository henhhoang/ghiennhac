import React from 'react';
import { AiFillStar, AiFillHeart, AiFillPlayCircle } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { MdAddCircle } from 'react-icons/md';
import './Song.scss';

function Song(props) {
    const value = props.value;

    const song = {
        star: true,
        padder: true,
        playsFill: false,
        col: ''
    };

    switch (value) {
        case "song":
            song.star = true;
            song.padder = true;
            song.playsFill = false;
            song.col = "col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 items-song";
            break;
        case "new":
            song.star = false;
            song.padder = false;
            song.playsFill = true;
            song.col = "col-xl-3 col-lg-4 col-6 items-new";
            break;
        default:
    }

    return (
        <div className={`items px-lg-3 px-md-2 px-sm-2 px-2" ${song.col}`}>
            <div className="song">
                <div className="top">
                    {value === "item" && <span className="time">03:20</span>}
                    <div className="play-container">
                        {song.star &&
                            <div className="star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        }
                        <div className="play">
                            {song.playsFill ? <button><AiFillPlayCircle /></button> : <button><FiPlay /></button>}
                        </div>
                        {song.padder &&
                            <div className="padder flex">
                                <button className="add">
                                    <MdAddCircle />
                                </button>
                                <button className="heart">
                                    <AiFillHeart />
                                </button>
                            </div>
                        }
                    </div>
                    <a href="/" className="img">
                        <img src="./images/item1.jpg" alt="" />
                    </a>
                </div>
                <div className="bottom">
                    <a href="/" className="name">Kiếp duyên không thành</a>
                    <a href="/" className="singer">Hênh đẹp trai</a>
                </div>
            </div >
        </div >
    );
}

export default Song;