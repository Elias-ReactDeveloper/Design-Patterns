/*
RESUME
superclass -> only methods and attributes all children inherit
childclass -> 
    -- don't write specific methods/attributes manually in all child classes.
    -- creates another class for specific behavior.
    -- use class object for specific behavior in child classes.
*/

const Animal = function(sound, height, weight, name){
    this.sound = sound
    this.height = height
    this.weight = weight
    this.name = name
    this.fly = null
}

const FlyAbility = function(fly){
    if(fly) {
        this.fly = () => {
            console.log(`I'm flying`)
        }
    } else {
        this.fly = () => {
            console.log(`I can't fly`)
        }
    }
}

const Dog = function(height, weight, name){
    
    const animal = new Animal('Au au', height, weight, name)
    animal.fly = new FlyAbility(false).fly

    return {
        ...this,
        ...animal
    }
}

const Bird = function(height, weight, name){
    
    const animal = new Animal('piu, piu', height, weight, name)
    animal.fly = new FlyAbility(true).fly

    return {
        ...this,
        ...animal
    }
}

const bird = new Bird(20, 20, 'biru')
console.log('bird', bird)
bird.fly()

const dog = new Dog(20, 20, 'toto')
console.log('dog', dog)
dog.fly()