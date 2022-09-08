function Converter() {
  var valor = document.getElementById("valor").value;
  var conv = parseFloat(valor);
  var result = 5 * conv;
  document.getElementById("resultado").innerHTML =
    " O valor de " + valor + "R$ equivale à aproximadamente " + result + "U$";
}
