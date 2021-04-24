import html from '../js/core.js'
import Header from './Header.js'
import Wapper from './Wapper.js'
import Product from './Product.js'
import Footer from './Footer.js'
import { connect } from '../js/store.js'



function App() {
    return html`
        <div id="app">
            ${Header()}
            ${Wapper()}
            ${Product()}
            ${Footer()}
        </div>
        
    `
}


export default connect()(App);
