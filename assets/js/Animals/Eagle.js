import Animal from "./Animal.js";

class Eagle extends Animal{
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound);
    }
    shriek(){
        console.log("El aguila chillo");
        return this.getSound();
    }
}

export default Eagle;