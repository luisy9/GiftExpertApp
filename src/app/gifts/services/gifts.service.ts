import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  constructor(private http: HttpClient) {
    this.getLocalStorage();
  }

  private PRIVATE_KEY_GIFTS: string = 'ZRZR40R4vePBe4V1bi6yKbF8UNREBhCh';
  private URL_API: string = 'https://api.giphy.com/v1/gifs/';

  public gifs: Gift[] = [];

  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get getGifs(): Gift[] {
    return this.gifs;
  }

  searchTag(tag: string): void {
    console.log(tag)
    const params = new HttpParams()
      .set('api_key', this.PRIVATE_KEY_GIFTS)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.URL_API}search`, { params })
      .subscribe((res) => {
        this.gifs = [...res.data];
      });

    this.controlTagsHistory(tag);

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);

    this.loadLocalStorage();
  }

  private controlTagsHistory = (tag: string) =>
    (this._tagsHistory = this._tagsHistory.filter((tg) => tg !== tag));

  private loadLocalStorage(){
    localStorage.setItem('gifs', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(){
    if(!localStorage.getItem('gifs')){
      return;
    }else{
      this._tagsHistory = JSON.parse(localStorage.getItem('gifs')!);
    }
  }
}
