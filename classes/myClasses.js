// ES 6
// Class Approach
// class User{
//     constructor(username, email, password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     // functions or methods
//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     capitalizeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// // Create Object of class
// const obj1=new User("Ankit","ankit.rane@gmail.com","123")
// console.log(obj1.encryptPassword());
// console.log(obj1.capitalizeUsername());

// Behind the Scenes Prototype Approach
function User(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function () {
    return `${this.password}abc`;
}
User.prototype.capitalizeUsername=function () {
    return `${this.username.toUpperCase()}`;
}
// Create Object of Prototype
const obj2=new User("Mahesh","mahesh.bobade@gmail.com","123456")
console.log(obj2.encryptPassword());
console.log(obj2.capitalizeUsername());