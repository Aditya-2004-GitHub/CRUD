import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  imags: any[] = []

  constructor(private http:HttpClient) { }

  getImages(){
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((res:any)=>{
      this.imags = res
    })
  }
}
