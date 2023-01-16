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
  const formCalculaFrete = document.forms.formCalculaFrete;
  const {cep1, cep2} = formCalculaFrete;

  const formCartAdd = document.forms.cartAdd
  const {quant} = formCartAdd;

  const dataProductId = document.querySelector("#product-shipping").getAttribute("data-productId");
  const shippingResult = document.querySelector(".shipping-result");
  shippingResult.textContent = "Carregando fretes...";

  const url = `https://www.multivisi.com.br/mvc/store/product/shipping/?loja=196157&simular=ok&cep1=${cep1.value}&cep2=${cep2.value}&quantidade=${quant.value}&id_produto=${dataProductId}`;

  fetch(url, {
    method: "GET",
    headers: { "Content-type": "text/html; charset=ISO-8859-1" },
  })
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      let decoder = new TextDecoder("iso-8859-1");
      let text = decoder.decode(buffer);
      shippingResult.innerHTML = text;
    })
    .catch((err) => console.log(err));
}

// foca no cep 2 ao terminar digitar o cep 1
cep1.addEventListener("input", function () {
  if (cep1.value.length === 5) {
    cep2.focus();
  }
});

// Modal formas de pagamento
const modal = document.querySelector(".wrapper-payment");
const btnOpenModal = document.querySelector(".product__modal-payment");
const btnCloseModal = document.querySelector(".payment__close");

btnOpenModal.onclick = function () {
  modal.style.display = "block";
};

btnCloseModal.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Alterna entre as abas de navegação do modal de formas de pagamento
const pixTitle = document.querySelector(".pix-title");
const pixItem = document.querySelector("#pix");

const creditTitle = document.querySelector(".credit-title");
const creditItem = document.querySelector("#credit");

const boletoTitle = document.querySelector(".boleto-title");
const boletoItem = document.querySelector("#boleto");

pixTitle.onclick = function () {
  pixItem.style.display = "block";
  pixTitle.style.color = "#003CE5";

  creditItem.style.display = "none";
  creditTitle.style.color = "#94A3B8";

  boletoItem.style.display = "none";
  boletoTitle.style.color = "#94A3B8";
};

creditTitle.onclick = function () {
  creditItem.style.display = "block";
  creditTitle.style.color = "#003CE5";

  pixItem.style.display = "none";
  pixTitle.style.color = "#94A3B8";

  boletoItem.style.display = "none";
  boletoTitle.style.color = "#94A3B8";
};

boletoTitle.onclick = function () {
  boletoItem.style.display = "block";
  boletoTitle.style.color = "#003CE5";

  pixItem.style.display = "none";
  pixTitle.style.color = "#94A3B8";

  creditItem.style.display = "none";
  creditTitle.style.color = "#94A3B8";
};