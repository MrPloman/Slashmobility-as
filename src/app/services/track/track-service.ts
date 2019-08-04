import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LocalStorageService } from '../localStorage/local-storage-service';

@Injectable({
    providedIn: 'root'
})
export class TrackService {

    public favoriteTracks = [];
    public favoriteTracksSubject: Subject<any>;

    constructor(private localStorageService: LocalStorageService) {
        const localFavorites = this.localStorageService.getValue('favoriteTracks');

        if (localFavorites) this.favoriteTracks = localFavorites;

        this.favoriteTracksSubject = new Subject();
    }

    addToFavorites(track) {
        const isTrackFavorite = this.isFavorite(track);

        if (!isTrackFavorite) {
            this.favoriteTracks.push(track);
            this.favoriteTracksSubject.next(this.favoriteTracks);
            this.localStorageService.setValue('favoriteTracks', this.favoriteTracks);
        }
    }

    removeFromFavorites(track) {
        this.favoriteTracks = this.favoriteTracks.filter(t => t.trackId !== track.trackId);
        this.localStorageService.setValue('favoriteTracks', this.favoriteTracks);
        this.favoriteTracksSubject.next(this.favoriteTracks);
    }

    getFavorites() {
        return this.favoriteTracks;
    }

    isFavorite(track): boolean {
        return !!this.favoriteTracks.find(t => t.trackId === track.trackId);
    }
}