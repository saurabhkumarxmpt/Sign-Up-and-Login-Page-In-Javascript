let show_password=document.getElementById('show_password');
let password_input=document.getElementById('password');
show_password.addEventListener('click',function(){
    if(password_input.type=='password'){
        password_input.type="text";
        show_password.classList="fa-solid fa-eye-slash";
    }
    else{

        password_input.type="password";
        show_password.classList="fa-solid fa-eye";
    }
})

var login_page=document.getElementById('login_page');
var signup_page=document.getElementById('sign_up');
var sign_btn=document.getElementById('loginbtn');
var signup_btn=document.getElementById('signup');
function login(){

         login_page.style.display='block';
        sign_btn.style.classList='sign_style';
        signup_page.style.display="none";

}

function sign(){

    signup_page.style.display='block';
    login_page.style.display='none';
    signup_btn.style.classList='sign_style';  
}