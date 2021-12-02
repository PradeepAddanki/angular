import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-workflow-action-renderer',
  templateUrl: './workflow-action-renderer.component.html',
  styleUrls: ['./workflow-action-renderer.component.scss'],
})
export class WorkflowActionRendererComponent implements OnInit {
  data;
  constructor() {}

  ngOnInit(): void {}
  agInit(params: ICellRendererParams) {
    this.data = params.value;
  }
}
