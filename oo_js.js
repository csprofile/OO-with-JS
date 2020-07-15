class Vehicle{
  constructor(id){
    this.id = id;
    this.type = this.constructor.name;
  }

  static staticMethod(){
    console.log("Call me without instancing the class")
  }

  get(){
    return this;
  }

  genericMsg(){
    console.log(`I'm a ${this.type} and my code is ${this.id}`);
  }

  overloadedMethod(){
    console.error("Not Implemented");
  }

  #privateMethod(){
    return "This message will never be shown"
  }

  publicMethod(){
    let privateReturn = this.#privateMethod();
    console.log(`${privateReturn}, unless you use a public method to expose it`);
  }
}

class Car extends Vehicle{
  constructor(id){
    super(id);

    super.overloadedMethod = function(){
      console.log(`Method overloaded by the Car class`);
    }
  }
}

class Boat extends Vehicle{
  constructor(id){
    super(id);

    super.overloadedMethod = function(){
      console.log(`Method overloaded by the Boat class`);
    }
  }
}


let vehicle1 = new Boat("ABC-1234");
vehicle1.genericMsg();
vehicle1.overloadedMethod();

let vehicle2 = new Car("YXB-1020");
vehicle2.genericMsg();
vehicle2.overloadedMethod();
vehicle2.publicMethod();

Vehicle.staticMethod();
