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
}

const FlyAbility = function(){
    this.fly = () => {
        console.log(`I'm flying`)
    }
}

const Bird = function(sound, height, weight, name, fly){
    
    const animal = new Animal(sound, height, weight, name)

    if(fly) {
        this.birdBehaviors = new FlyAbility()
    }

    return {
        ...animal,
        ...this
    }
}

const bird = new Bird('piu piu', 20, 20, 'Jje', true)
console.log(bird)
bird.birdBehaviors.fly()