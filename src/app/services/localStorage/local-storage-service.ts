import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor(){}

    setValue(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getValue(key: string): any {
        const obj = localStorage.getItem(key);

        if (obj) return JSON.parse(obj);
        else return null;
    }
}