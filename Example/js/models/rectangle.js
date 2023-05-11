class Rectangle extends Shape{

    #width;
    #height;

    constructor(width,height){
        super('прямокутник');
        this.#width = width;
        this.#height = height;
    }

    calcSquare(){
        return this.#width * this.#height;
    }

    toString(){
        return `${super.toString()}; ширина: ${this.#width} см; висота: ${this.#height}`;
    }
}