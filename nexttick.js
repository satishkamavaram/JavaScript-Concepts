var timeout = setTimeout(function(){
  console.log("I am timeout",0);
})

var immediate = setImmediate(function(){
  console.log("I am immediate");
})
debugger;
var next = function(a, b, immediate, callback) {
   console.log("${a} , ${b} ..sum is ..."+a);
   console.log(typeof immediate);
   process.nextTick( function(){
  //   clearImmediate(immediate);
     return callback(null,a+b);
   } )
}

console.log("doing sum operation..");
debugger;
var result = function(err,data){
  if(err)
     return console.log(err);
   console.log("sum is ${data}");
}

next("1adf",2,immediate,result);
debugger;
console.log("performing operation..");
