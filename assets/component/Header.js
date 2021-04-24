import html from '../js/core.js'


function Header() {
    return html`
        <header>
            <div class="header">
                <a href="#" class="header__home"><i class="fas fa-headphones-alt"></i></a>
                <label class="header__button" for="header__button"><i class="fas fa-stream"></i></label>
                <input type="checkbox" id="header__button" class="display-none">
                <div class="header__search">
                    <button class="search__button"><i class="fas fa-search"></i></button>
                    <input type="input" class="search__input" placeholder="Search songs, ablums">
                </div>

                <div class="player">
                    <div class="notification">
                        <button class="notification__button">
                            <i class="far fa-bell"></i>
                            <span class="notification__number">3</span>
                        </button>
                        
                        <div class="notification__container">
                            <h4>You have <strong>3</strong> notifications</h4>
                            <div class="notification__from">
                                <a href="#" class="notification__group">
                                    <span class="notification__img"><i class="far fa-envelope"></i></span>
                                    <span class="notification__content">
                                        <span>Sophi sent you a email</span>
                                        <br>
                                        <small>1 minutes ago</small>
                                    </span>
                                </a>
                                <a href="#" class="notification__group">
                                    <span class="avatar">
                                        <img src="./assets/img/avatar.png">
                                    </span>
                                    <span class="notification__content">
                                        <span>Sophi sent you a email</span>
                                        <br>
                                        <small>10 minutes ago</small>
                                    </span>
                                </a>
                                <a href="#" class="notification__group">
                                    <span class="notification__content">
                                        <span> 1.0 initial released</span>
                                        <br>
                                        <small>15 minutes ago</small>
                                    </span>
                                </a>
                            </div>
                            <div class="notification__seting">
                                <span>See all the notifications</span>
                                <button class="cog"><i class="fas fa-cog"></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="profile">
                        <a href="#" class="profile__name">John.Smith <i class="fas fa-caret-down"></i></a>
                        <span class="avatar">
                            <img src="./assets/img/avatar.png">
                        </span>
                        <div class="profile__box display-none">
                            <ul>
                                <li><a href="#">Setting</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Notification <span class="notification__number">3</span></a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    `
}


export default Header;