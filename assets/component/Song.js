import html from '../js/core.js'
import { connect } from '../js/store.js'


function Song( {song, index} ) {
    return html`
        <div class="product__items col c-2">
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
                        <div class="product__play played">
                            <a><i class="fas fa-play" data-song="${song.id}"></i></a>
                        </div>
                        <div class="product__padder flex">
                            <a href="#" class="prodcut__like">
                                <i class="fas fa-plus-circle"></i>
                            </a>
                            <a href="#" class="prodcut__heart">
                                <i class="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="product__bottom">
                    <a href="#" class="product__name">${song.name}</a>
                    <a href="#" class="product__singer">${song.singer}</a>
                </div>
            </div>
        </div>
    `
}


export default connect()(Song);