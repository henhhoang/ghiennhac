import html from '../js/core.js'
import Nav from './Nav.js'


function Wapper() {
    return html`
        <div class="nav-container">
            <div>
                ${Nav()}
            </div>
        </div>
        
    `
}


export default Wapper;