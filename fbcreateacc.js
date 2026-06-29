let form = document.getElementById("signupForm");
form.addEventListener("submit", function (event) 
{
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("fsurname").value;
    console.log(lastName);
    let day = document.getElementById("day").value;
    console.log(day);
    let month = document.getElementById("month").value;
    console.log(month);
    let year = document.getElementById("year").value;
    console.log(year);
    let gender = document.getElementById("gender").value;
    console.log(gender);
    let email = document.getElementById("mail").value;
    console.log(email);
    let pass = document.getElementById("password").value;
    console.log(pass);

})