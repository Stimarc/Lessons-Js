class Controller {

    constructor() {
        this._nav = $('section > nav');
        this._gallery = $('#gallery');
        this._logo = $('#logo-img');
        this._buttons = $('.nav-img');
        console.log('Controller -> OK');
    }

    loadImages(dir, prefix) {
        this._nav.hide(1000);
        this._gallery.show(1000);
        // ->
        this._gallery.html(`
        <img id="back" src="assets/icons/left_arrow.ico" alt="..." 
        title="Натисніть для повернення до панелі навігації"> 
         <br>`)
        // ->
        for (let i = 1; i <= 5; i++) {
            $('<img>', {
                src: `assets/img/${dir}/${prefix}${i}.jpeg`,
                class: 'mini'
            }).appendTo(this._gallery);
        }
    }

    dispatch(logoUrl) {
        if (logoUrl === 'assets/logo/cat.png') {
            this.loadImages('cats', 'c');
        }
        else if (logoUrl === 'assets/logo/dog.jpeg') {
            this.loadImages('dogs', 'd');
        }
        else if (logoUrl === 'assets/logo/fish.png') {
            this.loadImages('fishes', 'f');
        }
    }

    activateNav() {
        console.log('activateNav -> Ok');
        this._buttons.click((event) => {
            let url = $(event.target).attr('src');
            console.log(`logoUrl -> ${url}`);
            this.dispatch(url);
        });
    }

    activateBack() {
        $('#gallery').on('click', '#back', () => {
            console.log('back -> click');
            this._gallery.hide(1000);
            this._nav.show(1000);
            //*
            this._logo.animate({ 'width': '0%' }, 1);
            this._logo.attr('src', 'assets/logo/default.png');
            this._logo.animate({ 'width': '50%' }, 500);
        });
    }

    activateMini() {
        $('#gallery').on('click', '.mini', (event) => {
            console.log('mini -> click');
            let miniUrl = $(event.target).attr('src');
            console.log(`miniUrl -> ${miniUrl}`);
            //*
            this._logo.animate({ 'width': '0%' }, 1);
            this._logo.attr('src', miniUrl);
            this._logo.animate({ 'width': '100%' }, 1000);
        });
    }

    activateRotate() {
        this._buttons.hover(
            function () {
                $(this).css('transform', 'rotate(360deg)');
            },
            function () {
                $(this).css('transform', 'rotate(0deg)');
            }
        );
    }

}
