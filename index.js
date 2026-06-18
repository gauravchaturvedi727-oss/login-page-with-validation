const button = document.getElementById("button");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener('click', () =>{
    console.log(email.value);
    console.log(password.value);
    if(email.value === ""){
        alert('email is empty! fill it.')
    }
    else if(password.value === ""){
        alert('password cannot be empty.')
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Invalid Email!!!")
    }
    else if(password.value.length < 8){
        alert("Password must be of atleast 8 characters")
    }
    else{
        alert("Login Succesfull")
    }
});

