import Animal from "./Animal.js";

class Wolf extends Animal{
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }
    howl(){
        console.log("El Lobo aulló");
        return this.getSound();
    }
}

export default Wolf;