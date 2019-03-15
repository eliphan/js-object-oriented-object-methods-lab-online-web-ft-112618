function BoardMember(name, homeState, training) {
  this.name = name; 
  this.homeState = homeState;
  this.training = training;

  this.veto = "No, I must disagree"


  this.sayHi = function(){
    return (`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`);
    }
  
}