const Singleton = function(){

    const Pessoa = function(name, age   ) {
        this.name = name
        this.age = age
    }

    let instance

    const getInstance = (nome, age) => {
        if(!instance) instance = new Pessoa(nome, age)
        return instance
    }

    return { getInstance }
}()

const obj1 = Singleton.getInstance('Elias', 20)
const obj2 = Singleton.getInstance('Cris', 17)
console.log(obj1 === obj2)
