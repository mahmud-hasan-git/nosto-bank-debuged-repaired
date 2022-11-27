/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {

  const getWithdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = getWithdrawField.value;
 
  // input field validation
  if (newWithdrawAmountString =='') {
    alert('Please input Withdraw amount');
    return
  }

  const newWithdrawAmount = parseInt(newWithdrawAmountString);
  // console.log(typeof newWithdrawAmount, newWithdrawAmount);
  getWithdrawField.value = ``;

  const previousWithdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = previousWithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseInt(previousWithdrawTotalString);
  // console.log(typeof previousWithdrawTotal, previousWithdrawTotal)

  // calculate New Withdraw Total
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // console.log(newWithdrawTotal)

  // set withdraw total value
  previousWithdrawTotalElement.innerText = newWithdrawTotal;

  // calculate New balance Total
  const previousBalanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = previousBalanceTotalElement.innerText;
  const previousBalanceTotal = parseInt(previousBalanceTotalString)
  console.log(previousBalanceTotal);

  // setTextElementValueById(withdraw - total, newWithdrawTotal);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  console.log(newBalanceTotal);

  // set the balance total
  previousBalanceTotalElement.innerText = newBalanceTotal;
  // setTextElementValueById("balance-total", newBalanceTotal);
});
