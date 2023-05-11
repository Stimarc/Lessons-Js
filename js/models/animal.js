class Animal{
    constructor(type){
        this._type = type;

    }

    move(){
        return `якось рухається!`
    }
    toString(){
        return `Тваринка типу - ${this._type}. Вона - ${this.move()}`;
    }
}