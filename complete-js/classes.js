class Dog{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}.`);
    }

    static bark(){
        console.log('Woof!');
    }
}

const myDog=new Dog('Buster');
// normal method can call using object
myDog.introduce();
// static method can call using class name
Dog.bark();