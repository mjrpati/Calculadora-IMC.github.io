 const calcular = document.getElementById('calcular');
 
 function imc (){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById ('resultado');

    if (altura!== '' && peso!== ''){

        const IMC = (peso / (altura * altura)).toFixed(1);
      
        let classificacao = '';

        if (IMC < 18.5){
          classificacao = 'Abaixo do peso';
        }
        else if (IMC <= 24.9) {
          classificacao = 'Peso normal';
        }
        else if (IMC <= 29.9) {
          classificacao = 'Sobrepeso';
        }
        else if (IMC <= 34.9) {
          classificacao = 'Obesidade I';
        }
        else if (IMC <= 39.9) {
          classificacao = 'Obesidade II';
        }
        else if (IMC >= 40) {
          classificacao = 'Obesidade III';
        }

        resultado.textContent = 'Seu IMC é :' + IMC + ' Sua Classificação: ' + classificacao;
        resultado.style.color = '#ffffff';
        resultado.style.fontSize = '36px';
    }
    else{
      resultado.textContent = 'Preencha todos os campos!';
        resultado.style.color = '#ffffff';
        resultado.style.fontSize = '36px';

    }
 }

 calcular.addEventListener('click', imc)
;

