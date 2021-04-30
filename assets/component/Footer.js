import html from '../js/core.js'

function Footer() {
    return html`
        <div class="footer">
            <div class="footer-container flex">

                <div class="profile clickToggle main hide-sm hide">
                    <span class="avatar">
                        <img src="./assets/img/avatar.png">
                    </span>
                    <div class="profile__box bottom">
                        <ul>
                            <li><a href="#">Setting</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Notification <span class="notification__number">3</span></a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>

                <div class="control-left flex">
                    <button class="prevBtn">
                        <i class="fas fa-backward"></i>
                    </button>

                    <button class="pauseBtn">
                        <i class="fas fa-play icon-play"></i>
                        <i class="fas fa-pause icon-pause"></i>
                    </button>

                    <button class="nextBtn">
                        <i class="fas fa-forward"></i>
                    </button>

                    <button class="listBtn">
                        <i class="fas fa-list"></i>
                        <div class="playerList">
                            <ul class="playerList__list">
                                <li>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>

                <div class="range-container flex hide-sm hide">
                    <span class="name-song"></span>
                    <div class="progress-container">
                        <input class="progress" type="range" min="0" max="100" value="0">
                        <span class="progress-fill"></span>
                    </div>
                </div>

                <div class="control-right flex">
                    <span class="time">00:00</span>
                    <button class="muteBtn active">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <button class="randomBtn">
                        <i class="fas fa-random"></i>
                    </button>
                    <button class="repeatBtn">
                        <i class="fas fa-undo"></i>
                    </button>
                </div>

                <div class="header__search flex hide-sm hide">
                    <button class="search__button"><i class="fas fa-search"></i></button>
                    <input type="input" class="search__input" placeholder="Search songs, ablums">
                </div>
                <audio id="audio" src=""></audio>

            </div>
        </div>
    `
}


export default Footer;