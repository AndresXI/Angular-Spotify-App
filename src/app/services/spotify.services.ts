import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyServices {
  /** the search url string **/
  private searchUrl: string;
  /** client id base 64 **/
  private client_Id = "38172db425f940ddb33221d40520e4ca";
  /** client secret key  **/
  private client_secret = "326c300902eb4edda01f8d5b1eeb6644";
  /** Using btoa window function to encode string **/
  private encoded = btoa(this.client_Id + ":" + this.client_secret);

  /** Ijecting the http route  **/
  constructor(private http: Http) {}

  /** Getting the token from spotify --> Client Credential Flow**/
  getToken() {
    /** body parameters **/
    var params = "grant_type=client_credentials";

    /** Header parameters **/
    var headers = new Headers();
    headers.append("Authorization", "Basic " + this.encoded);

    /** the header paramters must be encoded **/
      headers.append("Content-Type", "application/x-www-form-urlencoded");

    /** send the request to spotify **/
    return this.http
      .post("https://accounts.spotify.com/api/token", params, {
        headers: headers
      })
      .pipe(map(res => res.json())); // returns an observable that contains the token
  }

  /** Search music method */
  searchMusic(str: string, type = "artist", token: string) {
    //console.log(token);
    /** Use spotiy api GET http --> https://developer.spotify.com/console/get-search-item/ */
    this.searchUrl =
      "https://api.spotify.com/v1/search?query=" +
      str +
      "&offset=0&limit=20&type=" +
      type +
      "&market=us"; // &ofset=0 --> starts at the begining

    // Setting the headers
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    /** return the response as an json object **/
    return this.http
      .get(this.searchUrl, { headers: headers })
      .pipe(map(res => res.json()));
  }
}