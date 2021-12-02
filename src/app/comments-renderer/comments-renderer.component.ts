import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-comments-renderer',
  templateUrl: './comments-renderer.component.html',
  styleUrls: ['./comments-renderer.component.scss'],
})
export class CommentsRendererComponent implements OnInit {
  data;
  constructor() {}
  agInit(params: ICellRendererParams) {
    this.data = params.value;
  }
  ngOnInit(): void {}
}
