var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function copiar() {
  var textoCop = document.getElementById('input-texto-cifrado');

  textoCop.select();
  document.execCommand('copy');
}

//Botones
document.getElementById("buton_cripto").addEventListener("click", function() {
  criptografar();
})

document.getElementById("buton_descripto").addEventListener("click", function() {
  descriptografar();
})