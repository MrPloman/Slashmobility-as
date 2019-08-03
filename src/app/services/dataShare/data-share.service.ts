import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private _sendDataSubject = new Subject<any>();
  sendData$ = this._sendDataSubject.asObservable();
  public dataFinal: []

  constructor(){}

  sendData(data: any){
    this.dataFinal = data
    this._sendDataSubject.next(data);
    console.log(data);
  }
/*
  getData(): Observable<any> {
    return this._sendDataSubject.asObservable();
}

  sendData(data: Music[]){
    this.data = data;
    this._sendDataSubject.next(data);
    console.log(data);
  }*/
}
