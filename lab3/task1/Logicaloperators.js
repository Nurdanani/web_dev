//1
alert( null || 2 || undefined ); // 2 becouse 2 is true 
//2 What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); //  1 becouse alert(1) work first then it's become undefined and then 2  , and or not check 3 becouse it's find true value

//3
alert( 1 && null && 2 ); //null

//4
alert( alert(1) && alert(2) ); //1 then undefined

//5
alert( null || 2 && 3 || 4 ); // 3 , && higher than 'or' -> null || 3 || 4 

//6
if(age >=14 $$ age<=90);

//7
if(!(age>=14 && age<=90));

//8
if (-1 || 0) alert( 'first' ); // (-1 || 0 = -1 -> true
if (-1 && 0) alert( 'second' ); // -1 && 0 = false
if (null || -1 && 1) alert( 'third' ); // null || -1 && 1 = 1 true
//answear : first , third

//9
let user = prompt('Who is there? ', "");
if (user === 'Admin'){
    let pass = prompt("Password?" , "");
    if(pass === 'TheMaster'){
        alert('Welcome!');
    }
    else if(pass === '' || pass=== null ){
        alert('Canceled');
    }
    else{
        alert('Wrong password');
    }
}
else if (user === '' || user === null){
    alert('Canceled');
}
else{
    alert("I don't know you");
}
