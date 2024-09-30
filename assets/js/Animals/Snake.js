import Animal from "./Animal.js";

class Snake extends Animal{
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }
    hiss(){
        console.log("La serpiente siseo");
        return this.getSound();
    }
}

export default Snake;