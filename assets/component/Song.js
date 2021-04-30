import html from '../js/core.js'
import { connect } from '../js/store.js';


function Song({ song, index }) {
    return html`
        <div class="product__items col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-lg-3 px-md-2 px-sm-2 px-2" data-song="${song.id}">
            <div class="product__song">
                <div class="product__top h-lg h-md" style="background-image: url(${song.image});">
                    <span class="product__time">03:20</span>
                    <div class="product__play-container h-lg h-md">
                        <div class="product__star flex">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="product__play">
                            <a>
                                <i class="fas fa-play"></i>
                                <i class="fas fa-pause"></i>
                            </a>
                        </div>
                        <div class="product__padder flex">
                            <a class="product__add">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a class="product__heart" onclick="event.stopPropagation()">
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="product__bottom">
                    <a class="product__name">${song.name}</a>
                    <a class="product__singer">${song.singer}</a>
                </div>
            </div>
        </div>
    `
}


export default connect()(Song);