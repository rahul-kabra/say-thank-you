import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = false;
  subscription: Subscription;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.isLoading
      .subscribe((response) => {
        this.isLoading = response as boolean;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}