$(document).ready(function () {

    $("#submitLogIn").click(function() {
        var firstName = $("#loginFirstName").val().trim();
        var lasttName = $("#loginLastName").val().trim();
        console.log(firstName);
        console.log(lasttName);
var NewUser= {
    first_Name: firstName,
    lastt_Name:lasttName
}
    })

})