//1 What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
}
//ans:1

//2 Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i ); // 1,2,3,4

let i = 0;
while (i++ < 5) alert( i );//1,2,3,4,5

//3
for (let i = 0; i < 5; i++) alert( i ); //0-4
for (let i = 0; i < 5; ++i) alert( i ); // 0-4

//4
for(let i =2 ; i<=10 ; i++){
    if(i%2 ==0 ){
        alert(i);
    }
}

//5 Replace "for" with "while"
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
//solution:
let i =0;
while(i<3){
    alert( `number ${i}!`);
    i++;
}

//6
let n;
do{
    n = prompt('enter a number greater than 100' , "");

}while(n<=100 && n);

//7 
let n= 10;
prime:
for(let i=2; i<=n; i++){
    for(let j=2; j<i; j++){
        if(i%j==0) continue prime;
    }
    alert(i);
}