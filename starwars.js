// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado


//lista de filmes
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

    //
    let todososFilmes = document.querySelectorAll('#movies>ul>li');
    console.log(todososFilmes);
    for (let j=0; j< todososFilmes.length; j++){
      let filmes = resposta.results[j+1];
      window.localStorage.setItem('filmes', filmes);
      filmes.click(function() {
        console.log(filmes.opening_crawl);
        $(".reading-animation").text(filmes.opening_crawl);
      });


    }
  }

});
