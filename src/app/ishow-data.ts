export interface IshowData {
  id : number,
  name : string,
  genres : [string,string,string],
  image : {
    medium : string
  } 
  summary: string,
  premiered: string,
  rating: {
    average: number
  }

}
