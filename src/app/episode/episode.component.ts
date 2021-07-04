import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iepisode } from '../iepisode';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  iEpisode: Iepisode[] = []
  seasonNum: number = 0;
 
  constructor(private showService: ShowService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  let v = this.activatedRouter.snapshot.params['id'];
  this.showService.getEpisodeDetails(v).subscribe(data => {
    this.iEpisode = data
    this.seasonNum = data[0].season
  })
  }

}
