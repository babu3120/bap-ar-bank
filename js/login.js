document.getElementById('btn.login').addEventListener('click',function(){
    // setep numar one email hendelar
   const emailInputFiled = document.getElementById('email-login');
   const email = emailInputFiled.value;

//   steap number 2 password set
const passwordFiled = document.getElementById('pass-login');
const password = passwordFiled.value;
// dont use this method but now do it infuture clint side it denger so be carefull
if(email ==='babu3120@gmail.com' && password === '27592669'){
    window.location.href = 'bank.html'
}
else{
    alert('Tui Password bule gecos!!! Tor kono jayga nai')
}
   
})