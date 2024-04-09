function calculate(){
  let firstNumber = parseFloat(document.getElementById('firstInput').value);
  let secondNumber = parseFloat(document.getElementById('secondInput').value);
  let operator = document.getElementById('operator').value;

  if(operator=='+'){
    result = firstNumber + secondNumber;
  }else if(operator=='-'){
    result = firstNumber - secondNumber;
  }else if(operator=='*'){
    result = firstNumber * secondNumber;
  }else if(operator=='/'){
    result = firstNumber / secondNumber;
  }else{
    result ="Invalid input";
  }

  document.getElementById('getresult').innerHTML='Result is ' + result ;
}