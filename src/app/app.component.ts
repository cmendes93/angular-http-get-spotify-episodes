import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  episodes = []; // lista de episódios

  constructor() {
    // fetch na API do Spotify
    fetch('https://api.spotify.com/v1/shows/2p0Vx75OmfsXktyLBuLuSf',{
      headers: {
    'Content-Type':  'application/json',
    Authorization: 'Bearer BQAbF-aTAZ4RoMw5nH5S7W2pwDhdyeOV84OMIml3l7Bt7tKbGyWOoZXI0CdF5yhle-rv04QnroeTJzqjB3fKgZu3MLQcj4DLXczrqiH7GtbexjmLnoGGPcAA3E7xYOY-40yyV4_OXR2NyrCe' // você precisa substituir o token bearer pelo seu pra funcionar! boa sorte! Acesse a API pública do Spotify em https://developer.spotify.com/console/get-show/ e clique em Get Token. É preciso linkar ou criar uma conta no Spotify. É gratuito.
  }
    }).then(
      response => response.json() // pega a resposta e converte em JSON
    ).then(
      json => {
        console.log(json.episodes.items)
        return this.episodes = json.episodes.items // atribui o JSON da resposta pra nossa lista
      }
    )
  }

}