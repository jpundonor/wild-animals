import Animal from "./Animal.js";

class Lion extends Animal{
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }
    roar(){
        console.log("El leon rugio")
        return this.getSound();
    }
}

export default Lion;