var numeroSecreto = parseInt(Math.random() *101);
var limiteTentativas = 5;
var tentativas = 0;

while (tentativas < limiteTentativas) {
  var chute = prompt('Digite um número entre 0 e 100:');
  tentativas++;
  
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
  alert('Acertou!')
  } else if (chute > numeroSecreto) { alert('Errou... número secreto é menor')
  } else if (chute < numeroSecreto) { alert('Errou... número secreto é maior')
  }
}
if (tentativas === limiteTentativas && chute != numeroSecreto) {
    alert('Suas tentativas acabaram. O número secreto era ' + numeroSecreto + '.');
}
