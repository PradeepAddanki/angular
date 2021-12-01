import { Component, OnInit } from '@angular/core';
import { Grid, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-qfc-definition-renderer',
  templateUrl: './qfc-definition-renderer.component.html',
  styleUrls: ['./qfc-definition-renderer.component.scss'],
})
export class QfcDefinitionRendererComponent implements OnInit {
  data;
  params;
  constructor() {}
  agInit(params: ICellRendererParams) {
    this.data = params.value;
    this.params = params;
  }

  ngOnInit(): void {}
}
