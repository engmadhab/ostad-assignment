const calcForm = document.getElementById('calculatorForm');
let firstNumber = document.getElementById('firstInput');
let secondNumber = document.getElementById('secondInput');
let operator = document.getElementById('operator');

// Show Error Method
function showError(input,message){
  const formControl = input.parentElement;
  formControl.className='form-control error';

  const small= formControl.querySelector('small');
  small.innerText = message;
} 

// Form Validation Event Listeners

calcForm.addEventListener('submit',function(e){
  e.preventDefault();

  if(firstNumber.value==''){
    showError(firstNumber,'First number is required');
  }else if(firstNumber.value!=firstNumber.value.replace(/[^0-9]/g)){
    showError(firstNumber,'Only number is required');
  }else{
    showSuccess(firstNumber);
  }

  if(operator.value==''){
    showError(operator,'Operator is required');
  }else{
    showSuccess(operator);
  }

  if(secondNumber.value==''){
    showError(secondNumber,'Second number is required');
  }else if(secondNumber.value!=secondNumber.value.replace(/[^0-9]/g)){
    showError(secondNumber,'Only number is required');
  }else{
    showSuccess(secondNumber);
  }

});

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

  document.getElementById('getresult').innerHTML='Result is = ' + result ;
}