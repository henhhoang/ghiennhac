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
            image: './assets/img/item2.jpg'
        },
        {
            id: 2,
            name: 'Đừng yêu nửa em mệt rồi',
            singer: 'Trần Trân',
            path: './assets/songs/Dungyeunuaemmetroi.mp3',
            image: './assets/img/item3.jpg'
        },
        {
            id: 3,
            name: 'Hóa ra em là người thứ 3',
            singer: 'Trần Trân',
            path: './assets/songs/Hoaraemlanguoithuba.mp3',
            image: './assets/img/item4.jpg'
        },
        {
            id: 4,
            name: 'Hồng nhan xưa',
            singer: 'Trần Trân',
            path: './assets/songs/hongnhanxua.mp3',
            image: './assets/img/item5.jpg'
        },
        {
            id: 5,
            name: 'Một người rất tốt',
            singer: 'Trần Trân',
            path: './assets/songs/Motnguoirattot.mp3',
            image: './assets/img/item6.jpg'
        },
        {
            id: 6,
            name: 'Somg thing just like this',
            singer: 'Trần Trân',
            path: './assets/songs/Somethingjustlikethis.mp3',
            image: './assets/img/item7.jpg'
        },
        {
            id: 7,
            name: 'Tình bạn diệu kỳ',
            singer: 'Trần Trân',
            path: './assets/songs/tinhbandieuky.mp3',
            image: './assets/img/item8.jpg'
        },
        {
            id: 8,
            name: 'Vong xuyên bỉ ngạn',
            singer: 'Trần Trân',
            path: './assets/songs/Vongxuyenbingan.mp3',
            image: './assets/img/item9.jpg'
        },
        {
            id: 9,
            name: 'Xuất sơn',
            singer: 'Trần Trân',
            path: './assets/songs/xuatson.mp3',
            image: './assets/img/item10.jpg'
        }
        ,
        {
            id: 10,
            name: 'Một triệu khả năng',
            singer: 'Trần Trân',
            path: './assets/songs/1trieukhanang.mp3',
            image: './assets/img/item11.jpg'
        },
        {
            id: 11,
            name: 'I Love You 3000',
            singer: 'Trần Trân',
            path: './assets/songs/3000.mp3',
            image: './assets/img/item12.jpg'
        },
        {
            id: 12,
            name: 'EDM Sáo Trúc',
            singer: 'Trần Trân',
            path: './assets/songs/edmsao.mp3',
            image: './assets/img/item13.jpg'
        },
        {
            id: 13,
            name: 'Em bằng lòng làm một người bình thường bên anh',
            singer: 'Trần Trân',
            path: './assets/songs/embanglong.mp3',
            image: './assets/img/item14.jpg'
        },
        {
            id: 14,
            name: 'Futari',
            singer: 'Trần Trân',
            path: './assets/songs/futari.mp3',
            image: './assets/img/item15.jpg'
        },
        {
            id: 15,
            name: 'Giang hải không độ nàng',
            singer: 'Trần Trân',
            path: './assets/songs/gianghai.mp3',
            image: './assets/img/item16.jpg'
        },
        {
            id: 16,
            name: 'Tam thốn nhân gian',
            singer: 'Trần Trân',
            path: './assets/songs/tamthon.mp3',
            image: './assets/img/item17.jpg'
        },
        {
            id: 17,
            name: 'Thay tôi yêu cô ấy',
            singer: 'Trần Trân',
            path: './assets/songs/thaytoi.mp3',
            image: './assets/img/item7.jpg'
        },
        {
            id: 18,
            name: 'Bước vu quy',
            singer: 'Trần Trân',
            path: './assets/songs/buocvuquy.mp3',
            image: './assets/img/item4.jpg'
        },
        {
            id: 19,
            name: 'Chân ái phai mau',
            singer: 'Trần Trân',
            path: './assets/songs/chanaiphaimau.mp3',
            image: './assets/img/item12.jpg'
        },
        {
            id: 20,
            name: 'Chỉ là không giống nhau',
            singer: 'Trần Trân',
            path: './assets/songs/chilakhongcungnhau.mp3',
            image: './assets/img/item11.jpg'
        },
        {
            id: 21,
            name: 'Cô phương tự hưởng',
            singer: 'Trần Trân',
            path: './assets/songs/cophuongtuhuong.mp3',
            image: './assets/img/item6.jpg'
        },
        {
            id: 22,
            name: 'Kết duyên',
            singer: 'Trần Trân',
            path: './assets/songs/kd.mp3',
            image: './assets/img/item8.jpg'
        },
        {
            id: 23,
            name: 'Thiệp hông người dưng',
            singer: 'Trần Trân',
            path: './assets/songs/thnd.mp3',
            image: './assets/img/item9.jpg'
        },
        {
            id: 24,
            name: 'Chỉ vì quá yêu',
            singer: 'Trần Trân',
            path: './assets/songs/chiviquayeu.mp3',
            image: './assets/img/item16.jpg'
        },
        {
            id: 25,
            name: 'Kiếp duyên không thành',
            singer: 'Trần Trân',
            path: './assets/songs/kdkt.mp3',
            image: './assets/img/item15.jpg'
        },
        {
            id: 26,
            name: 'Bồ đề kết',
            singer: 'Trần Trân',
            path: './assets/songs/bodeket.mp3',
            image: './assets/img/item17.jpg'
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
