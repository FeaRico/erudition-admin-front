import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly URL: string = environment.apiUrl + "/items/";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.URL);
  }

  getById(id: number): Observable<any>{
    return this.httpClient.get(this.URL + `${id}`);
  }

  add(newItem: Item): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.URL, newItem, {headers: headers});
  }

  update(updatedItem: Item): Observable<any>{
    return this.httpClient.put(this.URL, updatedItem);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `${id}`);
  }
}
