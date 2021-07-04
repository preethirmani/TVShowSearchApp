import { Component, OnInit } from '@angular/core';
import { Ishows } from '../ishows';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit {

  current: Ishows[] = [];
  newRelases: any[] = [];
  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.showService.gellAllShowsData().subscribe(data => this.current = data)   
    }

  slideConfig = {"slidesToShow": 7, "slidesToScroll": 6, "arrows":true, "infinte": false};

}


