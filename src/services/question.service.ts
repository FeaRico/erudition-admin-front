import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly URL: string = environment.apiUrl + "/questions/";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.URL + `${id}`);
  }

  create(createQuestion: Question): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.URL, createQuestion, {headers: headers});
  }

  update(updateQuestion: Question): Observable<any> {
    return this.httpClient.put(this.URL, updateQuestion);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `${id}`);
  }
}
