let calculator = {
  // ваш код
  sum: function() {
   return this.firstNumber + this.secondNumber
  },
  
  mul: function() {
    return this.firstNumber * this.secondNumber
  },

  read: function(a, b) {
    this.firstNumber = a
    this.secondNumber = b
  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
