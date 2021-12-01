import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Grid, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-qfc-type-renderer',
  templateUrl: './qfc-type-renderer.component.html',
  styleUrls: ['./qfc-type-renderer.component.scss'],
})
export class QfcTypeRendererComponent implements OnInit {
  data: any;
  params: any;
  btnFlag;
  constructor() {}
  agInit(params: ICellRendererParams) {
    this.data = params.value;
    this.params = params;
  }
  ngOnInit(): void {}
  downloadQfc() {
    console.log('perform Download', this.params);
  }
}
