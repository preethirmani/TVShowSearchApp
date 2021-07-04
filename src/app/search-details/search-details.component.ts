import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Isearch } from '../isearch';
import { ShowService } from '../show.service';
import { EpisodeComponent } from '../episode/episode.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
  
})
export class SearchDetailsComponent implements OnInit {

send:string = ''
@Output() seasonEvent = new EventEmitter()
  
current: Isearch = {
  id: 0,
  title: '',
  language: '',
  genre: [],
  rating: 0,
  summary: '',
  img:'',
  premiered: '',
  cast1:'',
  cast2:'',
  cast3:'',
  seasons:[]
}
   
  constructor(private activatedRoute: ActivatedRoute, 
              private showService: ShowService,
              private route: Router ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    let v = this.activatedRoute.snapshot.params['id']
    this.showService.getSingleShowData(v).subscribe(data => {
    this.current = data
    })

  }

  seasonHandler(event:any) {
     this.send = event.target.value;
     this.route.navigate(['/episode',event.target.value])

  }
}



