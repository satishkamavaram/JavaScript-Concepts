var something = function(){
  return new Promise(function(resolve,reject){
    resolve(2);
  })
}

var found = function(data){
   console.log(data);
   return new Promise(function(resolve,reject){
     resolve(data*3);
   })
}

var found1 = function(data){
   console.log(data);
   return new Promise(function(resolve,reject){
     reject(new TypeError());
   })
}

//sequential execution of asyncs
something()
.then(result => found(result))
.then(result1 => found1(result1))
.catch(err => console.log(err));

//parallel execution of asyncs
Promise.all([something(),found1(2)])
.then((result1,result2) => console.log("parallel"+result1 +" , "+result2))
.catch(err=> console.log(err));

//Passing promise to multiple callbacks
var p = something();
p.then(result => found(result));
p.then(result1 => found1(result1));

//calling callback function in then method of promise.
something().then(found);


something()
.then(found1)
.catch(err => console.log(err))
.then(found);


//promise race (for timeouts)
var p1 = function(timeout){
  return  new Promise(function(resolve,reject) {
        if(!isNaN(timeout)) {
        setTimeout(function(){
            resolve("I am timeout"+timeout);
          }, timeout);
        }
        else {
          reject(new TypeError("timeout value is not a number"))
        }
  })
}

Promise.race([p1(5000),p1(2000)])
.then(result=> console.log(result+" ...only"))
.catch(err=>console.log(err+ "======"));


Promise.race([p1(5000),p1(2000)])
.then(result=> console.log(result+" ...only"))
.catch(err=>console.log(err+ "======"));
//.done(result=> console.log(result+"...done"));
