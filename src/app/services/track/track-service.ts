import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LocalStorageService } from '../localStorage/local-storage-service';

@Injectable({
    providedIn: 'root'
})
export class TrackService {

    public favoriteTracks = [];

    constructor(private localStorageService: LocalStorageService) {
        const localFavorites = this.localStorageService.getValue('favoriteTracks');

        if (localFavorites) this.favoriteTracks = localFavorites; 
    }

    addToFavorites(track) {
        const isTrackFavorite = this.isFavorite(track);

        if (!isTrackFavorite) {
            this.favoriteTracks.push(track);
            this.localStorageService.setValue('favoriteTracks', this.favoriteTracks);
        }
    }

    removeFromFavorites(track) {
        this.favoriteTracks = this.favoriteTracks.filter(t => t.trackId !== track.trackId);
        console.log(this.isFavorite(track));
        this.localStorageService.setValue('favoriteTracks', this.favoriteTracks);
    }

    getFavorites() {
        return this.favoriteTracks;
    }

    isFavorite(track): boolean {
        return !!this.favoriteTracks.find(t => t.trackId === track.trackId);
    }
}