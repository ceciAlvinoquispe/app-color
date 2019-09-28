import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-copy-confirm',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class CopyConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<CopyConfirmComponent>) {
  }

  ngOnInit() {
    console.log(this.data);
    setTimeout(()=>{
      this.close();
    }, 2000);
  }

  close() {
    this.dialogRef.close();
  }
}
