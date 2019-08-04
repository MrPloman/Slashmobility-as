import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.sass'],
})
export class NavBarComponent {
  public dataFinalMusica: any[]=[];
  @Output() dataEvent = new EventEmitter<any>()

  receiveMusic($event){
    this.dataFinalMusica = $event;
    this.sendMusic();
  }
  
  sendMusic(){
    this.dataEvent.emit(this.dataFinalMusica);
  }

}