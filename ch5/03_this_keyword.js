// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules','10 things to make with marmite'],
  login: function() {
    console.log('the user logged in');
  },
  logout: function() {
    console.log('the user logged out');
  },
  logBlogs: function() {
    // console.log(this.blogs);
    // in order to use "this" as an equivalent of the object "user" we need to use normal functions, if we use arrow functions the word "this" will no longer be refered to the object user but to the object window.
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  },
  logHello() {
    // we can also declare a method like this, it  will also work as a regular function
    console.log('hello');
  }
};

user.logBlogs(); // in this case "this" refers to the object, this means this == user
console.log(this); // in this case this refers to the window object so "this" really dependes on how you call it
user.logHello();
