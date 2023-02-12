
//steap-1 :add eventlisterner in the deposit button
document.getElementById('btn-filed').addEventListener('click',function(){
    // steap-2: get the deposit amount form the deposit filed
    // get the input valu to add value
    const getDipositFiled = document.getElementById('deposit-filed')
    const newDipositFiledString = getDipositFiled.value;
    const newDipositFiled = parseFloat(newDipositFiledString);
    
    const getDepositAmount= document.getElementById('deposit-amount');
    const perviusDepositTotalString = getDepositAmount.innerText;
    const perviusDepositTotal =parseFloat(perviusDepositTotalString);
    // steap 4 add numbar to save the depositor
    const totalDepositTotal = perviusDepositTotal + newDipositFiled;
    getDepositAmount.innerText = totalDepositTotal;
    // steap numbar 7
    getDipositFiled.value ='';
})