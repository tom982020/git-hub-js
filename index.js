var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Nguoi');
var dog = new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log("Loi nang");
}
cat.eat(dog);
console.log(cat);