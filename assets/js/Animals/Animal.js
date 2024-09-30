class Animal {
    constructor(name, age, img, comments, sound){
        this.name = name;
        this.age = age;
        this.img = img;
        this.comments = comments;
        this.sound = sound;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getImg(){
        return this.img;
    }
    setComments(newComments){
        this.comments = newComments;
    }
    getSound(){
        return this.sound;
    }
}

export default Animal;