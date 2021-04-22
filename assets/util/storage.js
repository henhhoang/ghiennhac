const TODOS_STORAGE_KEY = 'TODO'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    },
    set(todos) {
        return localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }
}