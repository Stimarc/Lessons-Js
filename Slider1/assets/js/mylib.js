class Slider {

    constructor(boxId, boxWidth, boxHeight, images, _duration) {
        this._duration = _duration;
        this._box = $(`#${boxId}`);
        //*
        this._boxWidth = boxWidth;
        this._height = boxHeight;
        this._images = images;
        //*
        this._box.css('width', this._width);
        this._box.css('height', this._height);
        this._box.show(this._duration);
        //*
        this._slideId = 0;
        console.log('Constructor -> OK');

    }

    _loadImage(index, path) {
        $('<img>', {
            id: index + 1,
            src: path,
            class: 'slide',
        }).appendTo(this._box)
            .show(this._duration);

    }

    loadCollection(index, collection) {
        setTimeout(() => {
            if (index > collection.length - 1) {
                $('#left-arrow').fadeIn(this._duration * 2);
                $('#right-arrow').fadeIn(this._duration * 2);
                return;
            } else {
                this._slideId = index + 1;
                this._loadImage(index, collection[index++]);
                $('progress').val(index);
                this.loadCollection(index, collection);
            }
        }, this._duration);
    }

    activateArrowHover() {
        $('.arrow').hover(
            function () {
                $(this).css('transform', 'rotate(360deg)');
            },
            function () {
                $(this).css('transform', 'rotate(0deg)');
            }
        );
    }

    activateLeftArrow() {
        $('#left-arrow').on('click', () => {
            console.log('leftArrow -> Click!');
            if (this._slideId > 1) {
                console.log('leftMove -> OK');
                //*
                console.log(this._slideId);
                $(`#${this._slideId--}`).fadeOut(this._duration * 2);
                $('progress').val(this._slideId - 1);
            } else {
                alert('Ви на початку колекції - перехід ліворуч неможливий!');
            }
        })
    }

    activateRightArrow() {
        $('#right-arrow').on('click', () => {
            console.log('rightArrow -> Click!');
            if (this._slideId < this._images.length - 1) {
                console.log('rightMove -> OK');
                //*
                $(`#${++this._slideId}`).fadeIn(this._duration * 2);
                $('progress').val(this._slideId + 1);
            } else {
                alert('Ви в кінці колекції - перехід праворуч неможливий!');
            }
        })
    }
}