export interface IsearchData {
  id: number,
  name: string,
  language: string,
  genres: string[],
  summary: string,
  premiered: string,
  image : {
    original: string
  }
  rating: {
    average: number
  }
  _embedded:{
    cast:[{person: {name: string}},{person: {name: string}},{person: {name: string}}],
    seasons:Array<{id:number}>
  }

}
