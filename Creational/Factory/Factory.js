/* RESUME
-- classes have the same superclass
-- The object (children of the same class) is returned based on the argument received in the Factory Class
*/

const SuperClass = function(param1, param2, name = "SuperClass"){
    this.param1 = param1
    this.param2 = param2
    this.name = name
}

const ChildClass1 = function(param1, param2, specificParam) {
   const objectSuperClass = new SuperClass(param1, param2, "ChildClass1")
   this.specificParam = specificParam
   return {
        ...objectSuperClass,
        ...this
   } 
}

const ChildClass2 = function(param1, param2, specificParam) {
    const objectSuperClass = new SuperClass(param1, param2, "ChildClass2")
    this.specificParam = specificParam
    return {
         ...objectSuperClass,
         ...this
    } 
 }

const Factory = function(){
    this.create = (whichClass, param1, param2, specificParam) => {
        let objectCreated
        switch (whichClass) {
            case 1:
                objectCreated = new ChildClass1(param1, param2, specificParam)
                break;
            case 2:
                objectCreated = new ChildClass2(param1, param2, specificParam)
                break;
            default:
                objectCreated = new SuperClass(param1, param2)
            break;
        }
        return objectCreated
    }
}


const factoryObject = new Factory()
const object = factoryObject.create(1, 10, 15, 20)
console.log(object)
