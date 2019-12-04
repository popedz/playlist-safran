import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  searchSong(songName: string) {
    const API_KEY = `94b3927ce98c227c759b1afbeeaa17de`;
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&api_key=${API_KEY}&format=json`;
    return this.httpClient.get(API_URL).toPromise();
  }
}
