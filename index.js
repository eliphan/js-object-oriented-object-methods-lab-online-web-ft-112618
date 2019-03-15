function BoardMember(name, homeState, training) {
  this.name = name; 
  this.homeState = homeState;
  this.training = training;
  this.sayHi = function(){
    console.log("Hello everybody!");
  }
}

