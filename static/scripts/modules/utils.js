function fcopiar() {
  var textoCop = document.getElementById('input-texto-cifrado');
  textoCop.select();
  document.execCommand('copy');
}

export { fcopiar };