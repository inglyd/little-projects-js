const resultado = document.getElementById('resultado');
 
function imc() {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
  
  
  if (nome != '' && altura != '' && peso != '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

  let classificacao = '';
  
  if(valorIMC < 18.5) {
    classificacao = 'abaixo do peso'
  } else if (valorIMC < 25) {
    classificacao = 'dentro do peso'
  } else if (valorIMC > 25) {
    classificacao = 'acima do peso'
  }   
  resultado.textContent = `${nome}, o seu IMC é ${valorIMC} e você está ${classificacao} ideal.`;
  } else {
    resultado.textContent = 'Por favor, preencha os espaço em branco.'
  }
} 
calcular.addEventListener('click', imc)

// ideia: adc icons diferentes de acordo com o resultado