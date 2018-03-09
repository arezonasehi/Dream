$(document).ready(function () {
    function registrationSubmit() {


        if ($("#checkbox:checked")) {
            console.log("hi")
        // Getting a reference to the input field where user creates a new account
        var newFEmailAddress = $("#email").val().trim();
        var newPasswrod = $("#password").val().trim();
        var newame = $("#name").val().trim();
            console.log(newame);
        var newUser = {
            name : newame,
            password : newPasswrod,
            newFEmailAddress: newFEmailAddress
             }
        
            $.post("/newUser",newUser)
        
             
        }else{
            alert("must agree!")
        }


    }


// Adding event listeners for creating new users
    $(document).on("submit", "#registrationSubmit", registrationSubmit);
})