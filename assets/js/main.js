import { attach } from './store.js'
import { init } from './reducer.js'
import App from '../component/App.js'

attach(App, document.getElementById('root'));



const songs = init.songs;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = $('#app');
const clickToggle = $$('.clickToggle');
const audio = $('#audio');
const playBtn = $('.pauseBtn');
const nameSong = $('.name-song');
const player = $('.footer');
const btnNext = $('.nextBtn');
const btnPrev = $('.prevBtn');
const btnRepeat = $('.repeatBtn');
const btnRandom = $('.randomBtn');
const time = $('.time')
const progress = $('.progress');
const progressFill = $('.progress-fill');
const product = $('.songs');
const btnNav = $('.header__button');


console.log()

const musicApp = {
    songs: songs,
    isPlaying: false,
    isUpdateTime: true,
    isRepeat: false,
    isRandom: false,
    isOpenNav: false,
    isLoad: undefined,
    currentIndex: 0,

    //Dinh dang phuong thuc
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
          get: function() {
            return this.songs[this.currentIndex];
          }
        })
    },
    // xu ly su kien
    handleEvents: function() {
        const _this = this;
        

        //xu ly khi play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
        }

        // khi song duoc play
        audio.onplay = function() {
        _this.isPlaying = true;
        player.classList.add('playing');
        }

        // khi song bi pause
        audio.onpause = function() {
        _this.isPlaying = false;
        player.classList.remove('playing');
        }

        //xu ly khi next 
        btnNext.onclick = function() {
            _this.nextSong();
            audio.play();
        }

        //xu ly khi prev
        btnPrev.onclick = function() {
          _this.prevSong()
          audio.play();
        }

        // Xu ly su kien khi end song
        audio.onended = function() {
          if (_this.isRepeat) {
              audio.play();

          } else {
              btnNext.click();
              $('.product__items.played') ? $('.product__items.played').classList.remove('played') : undefined;
          }
        }

        // khi tien do thay doi
        audio.ontimeupdate = function() {
            if (_this.isUpdateTime) {
              if (audio.duration) {
              const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
              progress.value = progressPercent;
              progressFill.style.width = `${(audio.currentTime / audio.duration * 100).toFixed(1)}%`;
              time.textContent = `${_this.getSongTime(Math.floor(audio.currentTime)*1000)}`
              
            }
          }
        }

        // xu ly khi tua
        progress.onchange = function(e) {
          audio.currentTime = (audio.duration * (e.target.value)/100);
          _this.isUpdateTime = true;
        }

        // xu ly BUG khi tua
        progress.addEventListener('mousedown', function() {
          _this.isUpdateTime = false;
        });

        progress.addEventListener('touchstart', function() {
          _this.isUpdateTime = false;
        });

        //Xu ly khi repeat
        btnRepeat.onclick = function() {
          _this.isRepeat = !_this.isRepeat;
          this.classList.toggle('active', _this.isRepeat);
        }

        //Xu ly khi random
        btnRandom.onclick = function() {
          _this.isRepeat = !_this.isRepeat;
          this.classList.toggle('active', _this.isRepeat);
        }

        //Phat bai hat nguoi dung click
        product.onclick = function(e) {
          const productElement = e.target.closest('.product__items');
          const productPlayed = $('.product__items.played')
          if (productElement) {
            let dataSong = productElement.dataset.song;
            if (e.target.closest('.product__play')) {
              if (_this.isLoad === dataSong) {
                if (_this.isPlaying) {
                  audio.pause();
                  productElement.classList.remove('played');
                } else {
                  audio.play();
                  productElement.classList.add('played');
                }
              } else {
                
                _this.isLoad = dataSong;
                _this.loadSongWhenClick(dataSong)
                _this.isPlaying = true;
                productPlayed ? productPlayed.classList.remove('played') : undefined;
                productElement.classList.add('played');
                audio.play();
              }
            }
          }
        }


    },


    //load bai hat trong list
    loadCurrentSong: function() {
      nameSong.textContent = `${this.currentSong.name} - ${this.currentSong.singer}`;
      audio.src = this.currentSong.path;
    },

    getSongTime: function (millisec) {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        return "0" + minutes + ":" + seconds;
    },

    //Load bai hat chon
    loadSongWhenClick: function(id) {
      var song = songs.find( item => item.id == id)
      nameSong.textContent = `${song.name} - ${song.singer}`;
      audio.src = song.path;
    },

    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    //Open setting
    openSetting: function() {
      const _this = this;

      // Open nav
      btnNav.onclick = function() {
        _this.isOpenNav = !_this.isOpenNav;
        app.classList.toggle('open-nav', _this.isOpenNav)
        app.classList.toggle('off-nav', !_this.isOpenNav)
      };

      //Open profile
      app.onclick = function(e) {
        const profileElement = e.target.closest('.clickToggle.main');
        if (profileElement) {
          profileElement.classList.toggle('show-profile');
        } else if (!profileElement) {
          clickToggle.forEach( item => {
            if (item.classList.contains('show-profile')) {
              item.classList.remove('show-profile')
            }
          });
        }
      }
      
    },
    




    start: function() {

      this.defineProperties();

      this.handleEvents();

      this.loadCurrentSong();

      this.openSetting();

    }

}

musicApp.start();







