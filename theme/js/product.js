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

