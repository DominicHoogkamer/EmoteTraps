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


    constructor(private http:Http) {
    console.log('Hello DataProvider Provider');

    }

    getPersonEmotion(imageUrl) {
    const headers = new Headers({
      'Content-Type': 'application/octet-stream',
      'processData': false,
      'Ocp-Apim-Subscription-Key': '1ad8aeebdacd4ea2b62e156e8307ce9f'
    });

        const options = new RequestOptions({headers})

        return this.http.post(this.url, imageUrl,  options)
            .map(data => (data.json()))
            .do(result => console.log(result));
    }
}