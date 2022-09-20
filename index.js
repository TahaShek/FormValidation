let form =document.querySelector('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let email=document.querySelector('.Email').value
    let password=document.querySelector('.password').value
    alert(email)
    // alert(password.value)
})