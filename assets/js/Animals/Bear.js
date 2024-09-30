import Animal from "./Animal.js";

class Bear extends Animal{
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }
    growl(){
        console.log("El oso rugio");
        return this.getSound();
    }
}

export default Bear;