document.addEventListener('DOMContentLoaded', function () {
      const navToggle = document.querySelector('.nav-toggle');
      const navMenu = document.querySelector('.nav-menu');

      if (navToggle && navMenu) {
          navToggle.addEventListener('click', function () {
              navToggle.classList.toggle('active');
              navMenu.classList.toggle('open');
          });
      }

      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (navMenu) {
                  navMenu.classList.remove('open');
              }
          });
      });

      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
          contactForm.addEventListener('submit', function (e) {
              e.preventDefault();
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();

              if (!name || !email || !message) {
                  alert('Por favor, preencha todos os campos.');
                  return;
              }

              if (!email.includes('@') || !email.includes('.')) {
                  alert('Por favor, insira um e-mail válido.');
                  return;
              }

              alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
              contactForm.reset();
          });
      }
  });
document.addEventListener('DOMContentLoaded', function () {                                                                                                                                          
    // ... (seu código existente para menu e formulário)                                                                                                                                               
                                                                                                                                                                                                       
    // Seleciona elementos da calculadora                                                                                                                                                              
    const calculator = document.querySelector('.calculator');                                                                                                                                          
    const display = calculator.querySelector('.calculator-screen');                                                                                                                                    
    const keys = calculator.querySelector('.calculator-keys');                                                                                                                                         
                                                                                                                                                                                                       
    // Inicializa a calculadora                                                                                                                                                                        
    let prevOperand = '';                                                                                                                                                                              
    let currentOperand = '';                                                                                                                                                                           
    let operator = null;                                                                                                                                                                               
                                                                                                                                                                                                       
    // Atualiza o display                                                                                                                                                                              
    function updateDisplay() {                                                                                                                                                                         
      display.value = currentOperand;                                                                                                                                                                  
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    // Define operandos e operadores                                                                                                                                                                   
    function appendOperand(num) {                                                                                                                                                                    
      if (num === '.' && currentOperand.includes('.')) return; // Evita múltiplos pontos                                                                                                               
      currentOperand += num;                                                                                                                                                                           
      updateDisplay();                                                                                                                                                                                 
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    // Limpa a calculadora                                                                                                                                                                             
    function clearCalculator() {                                                                                                                                                                       
      prevOperand = '';                                                                                                                                                                                
      currentOperand = '';                                                                                                                                                                             
      operator = null;                                                                                                                                                                                 
      updateDisplay();                                                                                                                                                                                 
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    // Realiza a operação                                                                                                                                                                              
    function compute() {                                                                                                                                                                               
      let result;                                                                                                                                                                                      
      const prev = parseFloat(prevOperand);                                                                                                                                                            
      const current = parseFloat(currentOperand);                                                                                                                                                      
      if (operator === '+') result = prev + current;                                                                                                                                                   
      else if (operator === '-') result = prev - current;                                                                                                                                              
      else if (operator === '*') result = prev * current;                                                                                                                                              
      else if (operator === '/') result = prev / current;                                                                                                                                              
      updateDisplay();                                                                                                                                                                                 
      prevOperand = result;                                                                                                                                                                            
      currentOperand = '';                                                                                                                                                                             
      operator = null;                                                                                                                                                                                 
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    // Atualiza o operador                                                                                                                                                                             
    function chooseOperator(op) {                                                                                                                                                                      
      if (operator && currentOperand === '') return;                                                                                                                                                   
      operator = op;                                                                                                                                                                                   
      prevOperand = currentOperand;                                                                                                                                                                    
      currentOperand = '';                                                                                                                                                                             
    }                                                                                                                                                                                                  
                                                                                                                                                                                                       
    // Adiciona evento aos botões                                                                                                                                                                      
    keys.addEventListener('click', (e) => {                                                                                                                                                            
      const key = e.target;                                                                                                                                                                            
      if (!key.classList.contains('calculator-key')) return;                                                                                                                                           
                                                                                                                                                                                                       
      const value = key.textContent;                                                                                                                                                                   
                                                                                                                                                                                                       
      if (isNaN(value)) {                                                                                                                                                                              
        // Botões de operador ou limpar                                                                                                                                                              
        if (value === 'C') clearCalculator();                                                                                                                                                          
        else if (value === '=') compute();                                                                                                                                                             
        else chooseOperator(value); // Operadores (+, -, *, /)                                                                                                                                         
      } else {                                                                                                                                                                                         
        appendOperand(value);                                                                                                                                                                          
      }                                                                                                                                                                                                
    });                                                                                                                                                                                                
                                                                                                                                                                                                       
    // Atualiza o display inicial                                                                                                                                                                      
    updateDisplay();                                                                                                                                                                                 
  });                                 
