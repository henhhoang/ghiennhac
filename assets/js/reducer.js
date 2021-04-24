import storage from '../util/storage.js'

const init = {
    songs: [
        {
            id: 0,
            name: 'Đau để trưởng thành',
            singer: 'Trần Trân',
            path: './assets/songs/Daudetruongthanh.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 1,
            name: 'Dj China V80',
            singer: 'Trần Trân',
            path: './assets/songs/DjChiNa.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 2,
            name: 'Đừng yêu nửa em mệt rồi',
            singer: 'Trần Trân',
            path: './assets/songs/Dungyeunuaemmetroi.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 3,
            name: 'Hóa ra em là người thứ 3',
            singer: 'Trần Trân',
            path: './assets/songs/Hoaraemlanguoithuba.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 4,
            name: 'Hồng nhan xưa',
            singer: 'Trần Trân',
            path: './assets/songs/hongnhanxua.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 5,
            name: 'Một người rất tốt',
            singer: 'Trần Trân',
            path: './assets/songs/Motnguoirattot.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 6,
            name: 'Somg thing just like this',
            singer: 'Trần Trân',
            path: './assets/songs/Somethingjustlikethis.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 7,
            name: 'Tình bạn diệu kỳ',
            singer: 'Trần Trân',
            path: './assets/songs/tinhbandieuky.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 8,
            name: 'Vong xuyên bỉ ngạn',
            singer: 'Trần Trân',
            path: './assets/songs/Vongxuyenbingan.mp3',
            image: './assets/img/item1.jpg'
        },
        {
            id: 9,
            name: 'Xuất sơn',
            singer: 'Trần Trân',
            path: './assets/songs/xuatson.mp3',
            image: './assets/img/item1.jpg'
        }
    ]
    
}

const actions = {

}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state
}

export { init }
