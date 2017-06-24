import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  private url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?'


  constructor(private http: Http) {
    console.log('Hello DataProvider Provider');

  }

  getPersonEmotion(imageUrl) {
    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'processData': false,
      'Ocp-Apim-Subscription-Key': '1ad8aeebdacd4ea2b62e156e8307ce9f'
    });

    const options = new RequestOptions({ headers })

    return this.http.post(this.url, imageUrl, options)
      .map(data => (data.json()))
      .do(result => console.log(result));
  }

  getDescEmotion(desc) {
    return this.http.get('https://www.emoj.ai/api/classify?text=' + desc + '&token=kkrxjIKvufbQpz8V')
      .map(data => (data.json()))
      .do(result => console.log(result));
  }

  getMusic(artist) {

    const acces_token = 'BQBGuNPM32w1ukVOPLzfKhlDvzWLlqRihDEoQH063VPim9GHg_xnoblEQVfSOQo95WWNmOURnzxtopwnMrR9YxzkWLzLOLcNoXr7oWwTQ-_lK97ZzJ30kr9FkNmvFKAvlsq2D1Ooj-mghgF9qjuF-PNUkqt6ARbBonmrppBEbZ3z2699GAXmOJ25GPbpesq0Tw3d1oDuv1NJZnZK39CJcjSdQJloFiFpTli_rWNGDz6Uq5MMIVmKsRVLwWMLkpMWrziAesT9tPZTAItdBJhXdAr6RBBPi0SjZvCZp3SZ_wQKO1ZJCKnTzKA4MEG21A';

    const headers = new Headers({
      'Authorization': 'Bearer ' + acces_token
    });

  const options = new RequestOptions({ headers })

   return this.http.get('https://api.spotify.com/v1/search?q='+ artist + '&type=track&limit=5', options)
      .map(data => (data.json().tracks.items))
      .do(result => console.log(result));
  }
}