import React from 'react';
import './Footer.scss';
import { AiOutlineUserAdd, AiOutlineCloudDownload } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className="row footer">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-items login">
                    <a href="/" className="flex">
                        <div className="top">
                            <span className="icon"><AiOutlineUserAdd /></span>
                            <span className="text">Login or Create account</span>
                        </div>
                        <p>Save and share your playlist with your friends when you log in or create an account.</p>
                    </a>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-items download">
                    <a href="/" className="flex">
                        <div className="top">
                            <span className="icon"><AiOutlineCloudDownload /></span>
                            <span className="text">Login or Create account</span>
                        </div>
                        <p>Save and share your playlist with your friends when you log in or create an account.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;