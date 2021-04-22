import html from '../js/core.js'
import { connect } from '../js/store.js'



function App() {
    return html`
        <h1>Hello</h1>
    `
}


export default connect()(App);