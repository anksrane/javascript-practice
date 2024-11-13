class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
        
    }
}
// Get Parent Data
class Teacher extends User{
    constructor(username, email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

const obj1=new Teacher("Atharv","atharv@gmail.com","123456789");
obj1.logMe();
const obj2=new User("Ashish");
obj2.logMe();