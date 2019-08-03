import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { RequestService } from '../../services/request/request.service';
import {DataShareService} from '../../services/dataShare/data-share.service';
import { Music } from '../../models/music';

@Component({
  selector: 'search',
  styleUrls: ['./ion-searchbar.component.sass'],
  templateUrl: './ion-searchbar.component.html',
  providers: [RequestService, DataShareService],
})
export class IonSearchBarComponent implements OnInit {
  public searchResults:Music[]; 
  public searchValue: string;

  @Output() dataEvent = new EventEmitter<any>()

  constructor(public _requestService: RequestService, private _dataShareService: DataShareService) {
  }

  sendMusic(){
    this.dataEvent.emit(this.searchResults);
  }

  ngOnInit() {
  }

  sendDato(){
    this._dataShareService.sendData(this.searchResults);
    console.log(this.searchResults);
  }

  search(){
    this._requestService.getMusic(this.searchValue).subscribe(
      result => {
        this.searchResults = result.results;
        this.sendDato();
        this.sendMusic();
        
      },
      error =>{ 
        console.log(<any>error);
      }
    );
  }
}
