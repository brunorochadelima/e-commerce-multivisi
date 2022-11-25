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
  const cep1 = document.querySelector("#cep").value.substr(0, 5);
  const cep2 = document.querySelector("#cep").value.substr(6);
  const quant = document.querySelector("#quant").value;

  const shippingResult = document.querySelector(".shipping-result");

  fetch(
    `/mvc/store/product/shipping/?loja=196157&simular=ok&cep1=${cep1}&cep2=${cep2}&quantidade=${quant}&id_produto=${dataProductId}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      return response.text();
    })

    .then((data) => {
      let parser = new DOMParser();
      xmlDoc = parser.parseFromString(data, "text/html");
      // texto = xmlDoc.querySelector(".page-simula-frete");
      resultadoFrete = xmlDoc.getElementsByTagName("table")[1];
      shippingResult.appendChild(resultadoFrete);
    })

    .catch((error) => {
      console.log(error);
    });

  // Remove o primeiro filho de shippingResult
  shippingResult.removeChild(shippingResult.firstElementChild);
}
