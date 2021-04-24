import html from '../js/core.js'
import { connect } from '../js/store.js'
import Song from './Song.js'


function Product( {songs} ) {
    return html`
        <div id="product" class="product">
            <h3 class="discover">
                Discover
                <span>
                </span>
            </h3>
            <div class="row songs">
                ${songs.map((song, index) => Song({song, index}))}
            </div>
        </div>
        
    `
}


export default connect()(Product);