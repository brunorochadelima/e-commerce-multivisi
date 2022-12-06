const cookie = get_cookie("banner_aviso_cookies");
const banner = document.getElementById("banner_cookies");

function cria_cookie(nome, valor) {
  document.cookie = nome + "=" + valor + "; path=/";
  // oculta o banner depois de aceitar os cookies
  banner.style.display = "none";
}

function get_cookie(nome_cookie) {
  // Adiciona o sinal de = na frente do nome do cookie
  let cname = " " + nome_cookie + "=";
  // Obtém todos os cookies do documento
  let cookies = document.cookie;
  // Verifica se seu cookie existe
  if (cookies.indexOf(cname) == -1) {
    return false;
  }
  // Remove a parte que não interessa dos cookies
  cookies = cookies.substring(cookies.indexOf(cname), cookies.length);
  // Obtém o valor do cookie até o ;
  if (cookies.indexOf(";") != -1) {
    cookies = cookies.substring(0, cookies.indexOf(";"));
  }
  // Remove o nome do cookie e o sinal de =
  cookies = cookies.split("=")[1];
  // Retorna apenas o valor do cookie
  return decodeURI(cookies);
}

function exibirBannerCookie() {
  if (cookie == "true") {
    banner.style.display = "none";
  } else {
    banner.style.display = "block";
    banner.style.position = "fixed";
    banner.style.bottom = "10px";
    banner.style.left = "10px";
    banner.style.right = "10px";
  }
}
// setTimeout(exibirBannerCookie, 4500);
exibirBannerCookie();


// Modal de categorias
const modal = document.querySelector(".open_menu_categories");

function modalOverlay() {
  modal.classList.add("modal-overlay");
}
function exitModalOverlay() {
  modal.classList.remove("modal-overlay")
}
