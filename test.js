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

var yellowPerson = new Person();

var figure = yellowPerson.getSpecies();

console.log(figure);


Person.prototype.add = function (name) {
    console.log(name.toString());
}

yellowPerson.add("test");

var bool =  yellowPerson.isPrototypeOf(Person);
console.log(bool);