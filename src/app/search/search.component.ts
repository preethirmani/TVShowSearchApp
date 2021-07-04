import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = new FormControl('', Validators.minLength(3))
  

  constructor( private router: Router ) { }

  ngOnInit(): void {
  
    this.search.valueChanges.pipe(debounceTime(700)).subscribe(searchValue => {
      if(!this.search.invalid) {
     this.router.navigate(['/search', searchValue])
      }
    })
}

clearSearch(event:any) {
  event.target.value=''
}

}

