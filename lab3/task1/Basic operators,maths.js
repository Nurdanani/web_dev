//1
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
//answear: a=2 , b=2, c=2, d=1;
alert(++a); //2
alert(b++) ;//1
alert(a);//2
alert(b);//2

//2
let a = 2;
let x = 1 + (a *= 2);
alert(a); //4
alert(x); //5

//3
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6 
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //" -9 5"
"  -9  " - 5 //-14
null + 1 //1
undefined + 1  //NaN
" \t \n" - 2  //-2

//4
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

//answear:
let a= +prompt("First number?", 1)
let b = +prompt("Second number?", 2);
alert(a+b); //3






