function capturarVariante(variante) {
  const dataid = variante.getAttribute("data-variant");
  const inputVariante = document.querySelector("#variant");
  inputVariante.value = dataid;

  const div_variante = document.querySelectorAll(`[data-variant]`);

  div_variante.forEach((element) => {
    if (element.getAttribute("data-variant") == dataid) {
      element.classList.add("product__variant_options--selected");
    } else {
      element.classList.remove("product__variant_options--selected");
    }
  });
}

function validaSeSelecionouVariante() {
  const inputVariante = document.querySelector("#variant");
  if (inputVariante && inputVariante.value == "") {
    alert("Favor selecionar variação do produto");
    return false;
  } else {
    return true;
  }
}

function calcularFrete() {
  const productId = document.querySelector("#product-shipping");
  const dataProductId = productId.getAttribute("data-productId");
  const cep1 = document.querySelector("#cep").value;
  const cep2 = document.querySelector("#cep2").value;
  const quant = document.querySelector("#quant").value;
  const shippingResult = document.querySelector(".shipping-result");
  const url = `https://www.multivisi.com.br/mvc/store/product/shipping/?loja=196157&simular=ok&cep1=${cep1}&cep2=${cep2}&quantidade=${quant}&id_produto=${dataProductId}`;

  fetch(url, {
    method: "GET",
    headers: { "Content-type": "text/html; charset=ISO-8859-1" },
  })
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      let decoder = new TextDecoder("iso-8859-1");
      let text = decoder.decode(buffer);
      console.log(text);
      shippingResult.innerHTML = text;
    })
    .catch((err) => console.log(err));
}
