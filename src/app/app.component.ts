import { Component } from '@angular/core';
import { Music } from './models/music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'eMusic';

  public dataFinalMusica: any[]=[];

  constructor() {
  }

  ngOnInit() {
  }

  receiveMusic($event){
    this.dataFinalMusica = $event;
  }
}

