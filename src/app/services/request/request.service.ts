import { Injectable } from '@angular/core'; 
import { HttpClient} from '@angular/common/http'; 
import { Music } from '../../models/music';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; 

@Injectable()
export class RequestService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url ='https://itunes.apple.com/';
  }

  getMusic(searchValue):Observable<any>{
    return this._http.get(this.url +"search?term="+searchValue+"&entity=song");
  }

}