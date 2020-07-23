import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  path: string;
  isExpectedPath: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.path = data.path;
        console.log(this.path);
      });
    console.log(this.path);
    if (this.path === null || this.path === undefined)
      this.isExpectedPath = false;
    else
      this.isExpectedPath = true;
    console.log(this.isExpectedPath);
  }
}