import html from '../js/core.js'
import { connect } from '../js/store.js';


function Song( {song, index} ) {
    return html`
        <div class="product__items col l-2 m-3 c-6" data-song="${song.id}">
            <div class="product__song">
                <div class="product__top" style="background-image: url(${song.image});">
                    <span class="product__time">03:20</span>
                    <div class="product__play-container">
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