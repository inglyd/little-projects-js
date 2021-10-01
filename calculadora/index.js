const resultado = document.getElementById('resultado');
 
function imc() {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
  
  
  if (nome != '' && altura != '' && peso != '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    
  } else {
    resultado.textContent = 'Por favor, preencha os espaço em branco.'
  }
} 
calcular.addEventListener('click', imc)

// ideia: adc icons diferentes de acordo com o resultado