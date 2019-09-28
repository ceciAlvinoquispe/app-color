import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';

@Component({
  selector: 'home',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})

export class HomeComponent implements OnInit {

  listColor: Array<object> = [];

  //PAGINADO
  _page: number;
  _total_pages: number;
  _per_page: number;
  _total: number;

  constructor(
    public apiService: ApiService
  ) {}

  ngOnInit() {
    const self = this;
    this.apiService.getColors().subscribe(response => {
      this.listColor = response['data'];
      this._page = response['page'];
      this._total_pages = response['total_pages'];
      this._per_page = response['_per_page'];
      this._total = response['_total'];
    });
  }

  prevPage(event) {
    this.apiService.getColors().subscribe(response => {
      console.log('prev', response);
      this.listColor = response['data'];
    });
  }

  nextPage(event) {
    this.apiService.nextPage(event['page']).subscribe(response => {
      this.listColor = response['data'];
      this._page = response['page'];
      this._total_pages = response['total_pages'];
      this._per_page = response['_per_page'];
      this._total = response['_total'];
      console.log('next', response);
    });
  }

}
