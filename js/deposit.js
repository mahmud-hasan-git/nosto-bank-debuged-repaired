// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;

  // input field validation
  if (newDepositAmountString =='') {
    alert('Please input Deposit amount');
    return
  }
  
  const newDepositAmount = parseInt(newDepositAmountString)
  depositField.value = ``;
  // console.log(newDepositAmount);
  /* 
    1. get previous deposit total by id

    */
  const depositTotalElement = document.getElementById('deposit-total')
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseInt(previousDepositTotalString);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  // set deposit total value
  depositTotalElement.innerText = newDepositTotal;
  // setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = previousBalanceTotalElement.innerText;
  const previousBalanceTotal = parseInt(previousBalanceTotalString);
  // console.log(typeof previousBalanceTotal, previousBalanceTotal);

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  // console.log(newBalanceTotal);

  // set the balance total
  previousBalanceTotalElement.innerText = newBalanceTotal;

  // if (depositField.value ==="") {
  //   document.getElementById("btn-deposit").disabled = true;
  // } else {
  //   document.getElementById("btn-deposit").disabled = false;
  // }
});



