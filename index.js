let form =document.querySelector('form')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
// Saareee variables declare ho rha hain 
let btn =document.querySelector('.btn')
    let emailField=document.querySelector('.Email')
    let passwordField=document.querySelector('.password')
    let emailMessage =document.querySelector('.emailMessage')
    let passwordMessage=document.querySelector('.passwordMessage')
    let email=document.querySelector('.Email').value
    let password=document.querySelector('.password').value
    let emailreg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordreg=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let passwordmin=6;
    let passwordmax=16

// checks  
if(!emailreg.test(email)){
    emailMessage.innerHTML=`Enter Valid Email`
    emailMessage.style.color='red'
    return

}
if (password.length < passwordmin || password.length >passwordmax || !passwordreg.test(password) )
{
    passwordMessage.style.color='red'
    passwordMessage.innerHTML=`Enter Valid Pasword`
    return false
}
else{
    // alert('Login Successful')

    emailMessage.remove()
    passwordMessage.remove()
    btn.backgroundColor='green'
btn.innerHTML='Login Successful'
}
})