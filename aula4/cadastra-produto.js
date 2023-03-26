function cadastraProduto() {
  const $descricaoInput = document.getElementById("descricao");
  const $precoInput = document.getElementById("preco");
  const $estoqueInput = document.getElementById("estoque");

  function cleanInputs() {
    $descricaoInput.value = "";
    $precoInput.value = "";
    $estoqueInput.value = "";
  }

  try {
    const produto = new Produto(
      $descricaoInput.value,
      $precoInput.value,
      $estoqueInput.value
    );

    console.log(produto);

    cleanInputs();
  } catch (e) {
    alert(e.message);
    cleanInputs();
  }
}
