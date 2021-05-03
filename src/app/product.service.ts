import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operator/map';
import rxjs/add/operator/map;

@Injectable()
export class ProductService {

_albumUrl: String="../assets/album.json"

  constructor(private http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).response.json();
  }

}
