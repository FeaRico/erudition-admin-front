import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Answer} from "../model/answer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private readonly URL: string = environment.apiUrl + "/answers/";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.URL + `${id}`);
  }

  create(createAnswer: Answer): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.URL, createAnswer, {headers: headers});
  }

  update(updateAnswer: Answer): Observable<any> {
    return this.httpClient.put(this.URL, updateAnswer);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `${id}`);
  }
}
