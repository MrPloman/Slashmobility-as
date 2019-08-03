import { Component, OnInit } from '@angular/core';

import { TrackService } from '../../services/track/track-service';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  private favoriteTracks;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.favoriteTracks = this.trackService.getFavorites();
  }

}
