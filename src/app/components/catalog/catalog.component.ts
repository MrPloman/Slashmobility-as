import { Component, Input, OnInit, ChangeDetectionStrategy, Renderer } from '@angular/core';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  @Input() public dataUltima: any[]=[]; // aqui encapsulem tota la data procedent de la request a la API
  public state: boolean;
  public text: any;
  
  constructor(private renderer: Renderer) {
    this.state = false;
    this.text = "inactive"

  }

  ngOnInit(){
    console.log('init');

  }

  changeState(){
    this.text = (this.state) ? "inactive" : "active";
    this.state = !this.state;
  }

}
