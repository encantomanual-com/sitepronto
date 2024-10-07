function redirecionarPagina() {
    const select = document.getElementById('meuSelect');
    const url = select.value;
    if (url) {
      window.location.href = url; // Redireciona para a página selecionada
    }
}