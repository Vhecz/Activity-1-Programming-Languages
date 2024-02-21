const UserData ={
    firstName: "John",
    lastName: "Doe",
    age: "30",
    email: "john@example.com",
    isAdmin: false, 
    
    fullName: function(){
        console.log("Fullname: " + this.firstName + " " + this.lastName);
    },
    
    userInformation: function(){
        //console.log("User Information");
        this.fullName();
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        console.log("Role: " + (this.isAdmin ? "Admin" : "User"));
    },
    
    adminInformation: function(){
       // console.log("Admin Information");
        this.isAdmin = true;
        this.fullName();
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        console.log("Role: " + (this.isAdmin ? "Admin" : "User"));
    }
};

console.log("User Information");
UserData.userInformation();

console.log("\nAdmin Information");
UserData.adminInformation();
