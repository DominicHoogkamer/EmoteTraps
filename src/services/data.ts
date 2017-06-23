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

    const acces_token = 'BQCVCl5VGqFwoQ_vsRLvSKJk61_yQvWSuX0EDrhT3uM5-KVNrBsLUM6gUA1VfgKXNTspP02B8lKA9WBACsSQUf5pBRrBw64jCWZk0YWZRghSnLA9nzqOFdMClIndOM0O9d64odDnPwjfwzKJ8RfkTsb9-4dM2biyCXXDb5jdv0I2opJSW9kww2XDqV3ARj77f-fymq0S3_oZsPR7tKofraGMhEnthg8mp7GU4UAYC1-kNm_DZzQHQmjWGor_nhDtIsqT8w216yqzkZm8mT7ovOp6R9dSKgj8B2dsvMLqTgCBhlsX5BjFgS_GJr8dwA';

    const headers = new Headers({
      'Authorization': 'Bearer ' + acces_token
    });

  const options = new RequestOptions({ headers })

   return this.http.get('https://api.spotify.com/v1/search?q='+ artist + '&type=track&limit=3', options)
      .map(data => (data.json().tracks.items))
      .do(result => console.log(result));
  }
}