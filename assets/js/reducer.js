import storage from '../util/storage.js'

const init = {
    
}

const actions = {

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state
}