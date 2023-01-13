import { criptografar, descriptografar } from "./modules/cifrado.js"
import { fcopiar } from "./modules/utils.js"

var textInput = document.querySelector("#input-texto");

document.getElementById("buton_cripto").addEventListener("click", function() {
  criptografar(textInput);
  start_copiar()
})
//Funcion descifrar
document.getElementById("buton_descripto").addEventListener("click", function() {
  descriptografar(textInput);
  start_copiar();
})

function start_copiar() {
  document.getElementById("copiar").addEventListener("click", function() {
    fcopiar();
  })
}