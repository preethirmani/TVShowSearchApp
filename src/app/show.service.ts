import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IshowData } from './ishow-data';
import { map } from 'rxjs/operators';
import { Ishows } from './ishows';
import { IsearchData } from './isearch-data';
import { Isearch } from './isearch';
import { IepisodeData } from './iepisode-data';
import { Iepisode } from './iepisode';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor( private httpClient: HttpClient) { }

  gellAllShowsData() {
    
    return this.httpClient.get<IshowData[]>(`http://api.tvmaze.com/shows`).pipe(map(data => this.transformToAllShows(data)))
  
  }

  getSingleShowData(val: any) {
    let reg = /[0123456789]/
    let url = ''
    if(reg.test(val)) {
      // url for id
      url = `https://api.tvmaze.com/shows/${val}?embed[]=seasons&embed[]=cast`
    } else {
      // url for string
      url = `https://api.tvmaze.com/singlesearch/shows?q=${val}&embed[]=seasons&embed[]=cast`
    }
    console.log('single search url::'+url)
    return this.httpClient.get<IsearchData>(url).pipe(map(data => this.transformToSingleShow(data)))
  }

  getEpisodeDetails(id: number) {
    console.log("episode id"+id)
    
    let uri = `http://api.tvmaze.com/seasons/${id}/episodes`
    console.log("Episode URL::"+uri)
    return this.httpClient.get<IepisodeData[]>(uri).pipe(map(data => this.transformToEpdisode(data)))

  }

  private transformToEpdisode(data:IepisodeData[]){
    const list: any[] = []
    console.log("Transform to Episode Service::"+data)
    data.map(data => {
      list.push({
        id: data.id,
        name: data.name,
        season: data.season,
        img: data.image? data.image.medium : '',
        summary: data.summary,
        date: data.airdate,
        time:data.runtime,
        number:data.number
      })
    })
    console.log('list'+list)
    return list
  }

private transformToSingleShow(data:IsearchData ): Isearch{
  
  return{
  id: data.id,
  title: data.name,
  language: data.language,
  genre: data.genres,
  rating: data.rating.average,
  summary: data.summary,
  img:data.image ? data.image.original : '',
  premiered: data.premiered,
  cast1:data._embedded.cast[0]?data._embedded.cast[0].person.name : '',
  cast2:data._embedded.cast[1]?data._embedded.cast[1].person.name : '',
  cast3:data._embedded.cast[2]?data._embedded.cast[2].person.name : '',
  seasons:data._embedded.seasons?data._embedded.seasons:[]
  }
} 


  private transformToAllShows(data: IshowData[]) {
    const list: Ishows[] = [];
    
      data.map(data => {
        list.push({
          id: data.id,
          title : data.name,
          img : data.image ? data.image.medium : '',
         genres : data.genres,
          summary : data.summary,
          date :new Date(data.premiered).getFullYear(),
          rating : data.rating.average
        })
      })
    return list
  }


}


