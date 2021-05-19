import React from 'react';
import Control from '../Control';
import Footer from '../Footer';
import Song from '../Song';
import TopSong from '../TopSong';
import './Product.scss'

function Product(props) {
    return (
        <div id="product" className="product">
            <div className="box-product">
                <h3 className="discover">
                    <span>Discover</span>
                </h3>

                <div className="row songs">
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                    <Song value={"song"} />
                </div>

                <div className="row rattings-songs">
                    <div className="col-xl-7 col-lg-7">
                        <h3 className="discover">
                            <span>News Songs</span>
                        </h3>
                        <div className="row">
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                            <Song value={"new"} />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 top-songs">
                        <h3 className="discover">
                            <span>Top Songs</span>
                        </h3>
                        <ul>
                            <TopSong top={1} />
                            <TopSong top={2} />
                            <TopSong top={3} />
                            <TopSong top={4} />
                            <TopSong top={5} />
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
            <Control />
        </div>
    );
}

export default Product;