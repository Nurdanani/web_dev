//1
//The following function returns true if the parameter age is greater than 18.

//Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
//Is there any difference in the behavior of these two variants?
//answear: the both two functions will work

//2
function checkAge(age){
    return (age>18) ? true :confirm('Did parents allow you?');
}

function checkAge(age){
    return(age>18) || confirm('Did parents allow you?');

}

//3
function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

//4 
function pow(x, n){
    let res =x;
    for(let i=1; i<n; i++){
        res*=x;
    }
    return res;
}
let x = prompt('x' , "");
let n=prompt('n', '');

if(n<1){
    alert('write positive integer');

}else{
    alert(pow(x,n));
}