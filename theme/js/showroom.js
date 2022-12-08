function getLoja(identificador) {
  const loja = identificador.getAttribute("data-id");
  const lojaSelecionada = document.querySelector(`#${loja}`);
  lojaSelecionada.classList.remove("ocultar");

  const lojasNaoSelecionadas = document.querySelectorAll(`.loja`);

  let arrayLojasNaoSelecionadas = lojasNaoSelecionadas.length;

  for (let index = 0; index < arrayLojasNaoSelecionadas; index++) {
    if (lojasNaoSelecionadas[index] !== lojaSelecionada) {
      lojasNaoSelecionadas[index].classList.add("ocultar");
    }
  }
}
