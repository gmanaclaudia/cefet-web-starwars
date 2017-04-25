// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado



$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {
    console.log(resposta);
    let $listaDeFilmes = $('#movies ul');
    for (let i = 0; i< resposta.results.length; i++){
      let movie = resposta.results[i];
      $listaDeFilmes.append('<li><a href="' + movie.url + '">'+'Episode '+ movie.episode_id +'</a></li>');
    }
  }
});

$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(abertura) {
    console.log(abertura);
    let $todososFilmes = $('#movies li');
    for (let j = 0; j< abertura.results.length; i++){
      let movie = resposta.results[i];
      $listaDeFilmes.append('<li><a href="' + movie.url + '">'+'Episode '+ movie.episode_id +'</a></li>');
    }
  }
});

var menuExpandido = localStorage.get('menu-expandido'),
    menu = document.getElementById('menu');
if (menuExpandido === 'true') {
  menu.classList.add('expandido');
}
