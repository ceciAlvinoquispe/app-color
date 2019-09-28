import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';
import { CopyConfirmComponent } from '@app/components/copy-confirm/script';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";

@Component({
  selector: 'home',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})

export class HomeComponent implements OnInit {

  listColor: Array<object> = [];
  copied: boolean;

  //PAGINADO
  _page: number;
  _total_pages: number;
  _per_page: number;
  _total: number;

  constructor(
    public apiService: ApiService,
    private dialog: MatDialog
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

  infoColor(event) {
    console.log('color',event);
    this.copied = false;
    const textarea = document.createElement('textarea')
    textarea.value = event.name
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select()
    try {
      var successful = document.execCommand('copy');
      this.copied = true
    } catch(err) {
      this.copied = false
    }
    textarea.remove()
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'color';
    dialogConfig.width = '70%';
    dialogConfig.height = '70%';
    dialogConfig.panelClass = 'modal';
    dialogConfig.data = {
      background: event.color,
      year: event.year,
      pantone_value: event.pantone_value
    }
    this.dialog.open(CopyConfirmComponent, dialogConfig);
  }

  prevPage(event) {
    this.apiService.getColors().subscribe(response => {
      this.listColor = response['data'];
      this._page = response['page'];
      console.log('prev', response);
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
