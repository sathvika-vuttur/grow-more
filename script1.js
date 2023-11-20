function appendNumber(number) {
    document.getElementById('result').value += number;
  }
  
  function appendOperator(operator) {
    document.getElementById('result').value += operator;
  }
  
  function clearInput() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    try {
      const expression = document.getElementById('result').value;
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  