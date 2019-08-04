import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { RequestService } from '../../services/request/request.service';
import { Music } from '../../models/music';

@Component({
  selector: 'search',
  styleUrls: ['./ion-searchbar.component.sass'],
  templateUrl: './ion-searchbar.component.html',
  providers: [RequestService]
})
export class IonSearchBarComponent implements OnInit {
  public searchResults:Music[]; 
  public searchValue: string;

  @Output() dataEvent = new EventEmitter<any>()

  constructor(public _requestService: RequestService) {
  }

  sendMusic(){
    this.dataEvent.emit(this.searchResults);
  }

  ngOnInit() {
  }


  search(){
    this._requestService.getMusic(this.searchValue).subscribe(
      result => {
        this.searchResults = result.results;
        this.sendMusic();
        
      },
      error =>{
        this.searchResults = [];
        this.sendMusic();
        console.log(<any>error);
      }
    );
  }
}
