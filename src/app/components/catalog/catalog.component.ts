import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TrackService } from '../../services/track/track-service';

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
  
  constructor(private trackService: TrackService) {
    this.state = false;
    this.text = "inactive"
  }

  ngOnInit(){
  }

  handleFavorite(track) {
    const isFavorite = this.isFavorite(track);

    if (isFavorite) {
      this.trackService.removeFromFavorites(track);
    }

    else {
      this.trackService.addToFavorites(track);
    }
  }

  isFavorite(track) {
    return this.trackService.isFavorite(track);
  }
}
