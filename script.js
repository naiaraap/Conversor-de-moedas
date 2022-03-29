function ConvertToReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  valorEmDolarNumerico = parseFloat(valor);

  valorEmReal = (valorEmDolarNumerico * 5.03).toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " O resultado em real é RS " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmReal);
}

function ConvertToEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  valorEmDolarNumerico = parseFloat(valor);

  valorEmEuro = (valorEmDolarNumerico * 0.91).toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " O resultado em euro é RS " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmEuro);
}

function ConvertToLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  valorEmDolarNumerico = parseFloat(valor);

  valorEmLibra = (valorEmDolarNumerico * 0.76).toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " O resultado em libras é RS " + valorEmLibra;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmLibra);
}

function ConvertToBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  if (valor != "") {
    valorEmDolarNumerico = parseFloat(valor);
    console.log(valorEmDolarNumerico);
    valorEmBitcoin = (valorEmDolarNumerico * 0.000024).toFixed(2);
    var elementoValorConvertido = document.getElementById("valorEmBitcoin");
    var valorConvertido =
      "Este valor equivale a " + valorEmBitcoin + " Bitcoins";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

ConvertToBitcoin();