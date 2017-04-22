var Foo  = function(){
  this.year  = 100;
  console.log("I am timeout",this.year);
}

Foo.prototype.miles  = 0;

Foo.prototype.test  = function(miles) {
  console.log(miles );

}


var foo1  = new Foo();
var foo2  = new Foo();
console.log(foo1===foo2) //false

console.log(foo1.__proto__===foo2.__proto__) //true

foo1.miles = 10;


console.log(foo1.__proto__===foo2.__proto__) //true

//sets are shallow , gets are deeper
console.log(foo1.miles);
//console.log(foo2.miles);

console.log("----foo1-----");
for(var props in foo1) {
  console.log(props + ' '+ foo1.hasOwnProperty(props) );
}
console.log("----foo2-----");
for(var props in foo2) {
  console.log(props + ' '+ foo1.hasOwnProperty(props) );
}
