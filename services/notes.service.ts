import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private test= null; 
  constructor() { }


  public setData(data: any) {
    this.test= data;
    console.log("test", this.test);
    
  }

  public getData() {
    return this.test;
  }



}
