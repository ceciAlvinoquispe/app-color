import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';

@Component({
  selector: 'home',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})

export class HomeComponent implements OnInit {
  constructor(
    public apiService: ApiService
  ) {}

  ngOnInit() {
    const self = this;

    this.apiService.getColors().subscribe(response => {
      console.log('colores', response)
    });
  }
}
