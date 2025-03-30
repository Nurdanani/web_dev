//1
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?
  //answear: error  потому что внутри функции this  не ссылается на обьект 

//2
let calculator = {
    read(){
        this.a = +prompt('a' , 0);
        this.b = +prompt('b' ,0);
    },
    sum(){
        return this.a+ this.b;
    },

    mul(){
        return this.a*this.b;
    }
  
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//3
let ladder = {
    step: 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        alert(this.step);
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();