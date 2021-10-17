import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public readList(){
    return this.httpClient.get<List[]>(`${this.API_SERVER}/list`);
  }

  public createList(list: List){
    return this.httpClient.post<List>(`${this.API_SERVER}/list/create`, list);
  }

  public updateList(list: List){
    return this.httpClient.put<List>(`${this.API_SERVER}/list/${list.id}/update`, list);
  }

  public deleteList(id: number){
    return this.httpClient.delete(`${this.API_SERVER}/list/${id}/delete`);
  }
}
