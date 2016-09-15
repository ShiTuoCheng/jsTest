/**
 * Created by shituocheng on 2016/9/11.
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    var species = "yellow"
    this.getSpecies=function () {
        return species;
    }
}

function Dog() {
    this.meow = function (name) {
        console.log("meow" + name.toString());
    }
}


var yellowPerson = new Person();

var figure = yellowPerson.getSpecies();

console.log(figure);


Person.prototype.add = function () {
    console.log(this.species);
}

yellowPerson.add("test");

var bool =  yellowPerson.isPrototypeOf(Person);
console.log(bool);

var nigga = function (){

}

nigga.prototype = new Person();

var little_nigga = new Dog();
little_nigga.meow();
