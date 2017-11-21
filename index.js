function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

//DRYer way
const functions = {veto: function() {return 'No, I must disagree'},
approve: function() {return "You can do that!"},
doCharity: function() {return 'I like to help people.'},
sayHi: function() {return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`},
releasePressStatement: function() {return 'You will see great things from Scuber.'}}

Object.assign(BoardMember.prototype, functions);
