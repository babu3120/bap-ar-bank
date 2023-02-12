// strap one click hendelar add with button
document.getElementById('btn-hendle').addEventListener('click',function(){
    const WithdrawFiled  = document.getElementById('login-fileed');
    const newWidthdrawFiledString = WithdrawFiled.value;
    const newWithdraw  = parseFloat(newWidthdrawFiledString);
    // get withdraw part
    // steap 3
    const withdarawElement= document.getElementById('withdraw-total');
    const previusWithdarawSting= withdarawElement.innerText;

    const previusWithdarwTotal = parseFloat(previusWithdarawSting);
    // steap 4 
    // calculate amoount toatal 
    const carrentWithdarwTotal = previusWithdarwTotal + newWithdraw;
    withdarawElement.innerText = carrentWithdarwTotal;

    // setap 5
    const balanceTotalEliment = document.getElementById('total-balance');
    const previusbalanceTotalString = balanceTotalEliment.innerText;
    const previusBalanceTotal = parseFloat(previusbalanceTotalString);
    // steap 6
    const nowTotalBalance = previusBalanceTotal -carrentWithdarwTotal;
    balanceTotalEliment.innerText =nowTotalBalance;


// steap 7
WithdrawFiled.value ='';
})