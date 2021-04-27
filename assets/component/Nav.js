import html from '../js/core.js'


function Nav() {
    return html`
        <nav class="nav">
            <span>Discover</span>
            <ul class="nav__list list-music">
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="cd fas fa-compact-disc"></i>
                        <span>What's New</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Genres fas fa-music"></i>
                        <span>Genres</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Events fas fa-archive"></i>
                        <span>Events</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Listen fas fa-list"></i>
                        <span>Listen</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Video fab fa-youtube"></i>
                        <span>Video</span>
                    </a>
                </li>
            </ul>
            <ul class="nav__list list-setting small">
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="cd fas fa-compact-disc"></i>
                        <span>What's New</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Genres fas fa-music"></i>
                        <span>Genres</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Events fas fa-archive"></i>
                        <span>Events</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Listen fas fa-list"></i>
                        <span>Listen</span>
                    </a>
                </li>
                <li class="nav__items">
                    <a href="#" class="nav__link">
                        <i class="Video fab fa-youtube"></i>
                        <span>Video</span>
                    </a>
                </li>
            </ul>
        </nav>
    `
}


export default Nav;