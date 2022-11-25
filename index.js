// let age = 21
// let firstName = "Sadiq"
// let student = false;


// console.log(student)
// console.log(firstName)
// console.log(age)

// document.getElementById("p1").innerHTML = "Hello " + firstName
// document.getElementById("p2").innerHTML = "you are " + age + "years old"
// document.getElementById("p3").innerHTML = "enrolled: " + student

/* HOW TO ACCEPT USER INPUT
Easy Method: user Prompt!
Difficult: Create HTML textboxes! */

let username;
let email;

document.getElementById("myBtn").onclick = function() {
    username = document.getElementById("myName").value;
    email = document.getElementById("myEmail").value;

    document.getElementById("p1").innerHTML = username

    document.getElementById("p2").innerHTML = email
    console.log(username)
    console.log(email)
}