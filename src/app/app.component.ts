import { Component } from '@angular/core';
import {RequestService} from './services/request/request.service';
import {DataShareService} from './services/dataShare/data-share.service';
import { Music } from './models/music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [RequestService, DataShareService]
})
export class AppComponent {
  title = 'eMusic';

  public dataFinalMusica: any[]=[];

  constructor(private _dataShareService: DataShareService) {
  }

  ngOnInit() {
  }

  receiveMusic($event){
    this.dataFinalMusica = $event;
  }
}

