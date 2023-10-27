var userinput = prompt("Please enter the correct password to access your PDP form");
var correctpass = "CW2HW";
// This allows the user to enter the passsword
while (userinput !== "CW2HW"){
    window.alert("Invalid Password!")
    var userinput = prompt("Please enter the correct password to access your PDP");
    function showAlert() {
        alert("Great job you entered the correct password ;)")
    }
    // This function displays an alert when the user enters the correct password, and if the user enters the wrong password it will display invalid password
 if (userinput.length<=0){
    window.alert("Enter a password")
    var userinput = prompt("Please enter the correct password to access your PDP");
    
}  

else if (userinput== "CW2HW") {
    showAlert();
 }

}
// This allows for user inputs and validate date which I can use to change my website.
