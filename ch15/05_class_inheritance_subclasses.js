class User {
  constructor(username,email){
    // set  up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){ 
    console.log(`${this.username} just logged in`);
  }
  logout(){
    console.log(`${this.username} just logged out`);
  }
  incScore(){
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this; // we return the object himself so we can do method chaining
  }
}

class Admin extends User {
  deleteUser(){

  }
}

const userOne = new User('mario','mario@thenetninja.co.uk');
const userTwo = new User('luigi','luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

console.log(userOne,userTwo,userThree);

let users = [userOne,userTwo,userThree];