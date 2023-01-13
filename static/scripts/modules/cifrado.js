function criptografar(textInput) {

  var texto = textInput.value;

  var resultCripto = texto.replace(/e|E/g, "enter").replace(/i|I/g, "imes").replace(/a|A/g, "ai").replace(/o|O/g, "ober").replace(/u|U/g, "ufat")


  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto-cifrado">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" >Copiar</button>'
}

function descriptografar(textInput) {
//Detalles del cifrado
  var texto = textInput.value.toLowerCase();
  console.log(texto)
  var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

  
//Función copiar texto
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto-cifrado">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" >Copiar</button>'
}


export { criptografar, descriptografar };