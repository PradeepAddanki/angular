import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { QfcTypeRendererComponent } from './qfc-type-renderer/qfc-type-renderer.component';
import { QfcDefinitionRendererComponent } from './qfc-definition-renderer/qfc-definition-renderer.component';
import { CommentsRendererComponent } from './comments-renderer/comments-renderer.component';
import { WorkflowActionRendererComponent } from './workflow-action-renderer/workflow-action-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gridApi;
  columnApi;
  gridApi1;
  columnApi1;
  gridOptions: GridOptions = {};
  gridOptions1: GridOptions = {};
  qfcTypeInputArray = ['Email', 'Phone', 'Mobile'];
  qfcTypeSelected = '';

  columnDefs: ColDef[] = [
    { field: 'BusinessDate' },
    { field: 'Agregator' },
    { field: 'SourceSystem' },
    { field: 'ProductType1' },
    { field: 'ProductType2' },
    { field: 'ProductType3' },
    { field: 'ClearedProductFlag', checkboxSelection: true },
    {
      field: 'QFCType',
      cellRendererFramework: QfcTypeRendererComponent,
    },
    {
      field: 'QFCDefinition',
      cellRendererFramework: QfcDefinitionRendererComponent,
    },
  ];
  column: ColDef[] = [
    { field: 'BusinessDate' },
    { field: 'Agregator' },
    { field: 'SourceSystem' },
    { field: 'ProductType1' },
    { field: 'ProductType2' },
    { field: 'ProductType3' },
    { field: 'ClearedProductFlag', checkboxSelection: true },
    {
      field: 'QFCType',
    },
    {
      field: 'QFCDefinition',
    },
    {
      field: 'Comments',
      cellRendererFramework: CommentsRendererComponent,
    },
    {
      field: 'WorkflowAction',
      cellRendererFramework: WorkflowActionRendererComponent,
    },
  ];

  rowData = [
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
    },
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
    },
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
    },
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
    },
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
    },
  ];

  row = [
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
      Comments: '',
      WorkflowAction: '',
    },
    {
      BusinessDate: '2021-11-30',
      Agregator: 'FACS',
      SourceSystem: 'Intl Calypso',
      ProductType1: 'FX Option',
      ProductType2: 'Reverse Knockin USD Put',
      ProductType3: '',
      ClearedProductFlag: '',
      QFCType: '',
      QFCDefinition: '',
      Comments: '',
      WorkflowAction: '',
    },
  ];

  //rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    //this.gridOptions.rowHeight = 70;
    //   this.rowData = this.http.get<any[]>(
    //     'https://www.ag-grid.com/example-assets/row-data.json'
    //   );
    this.gridOptions.rowHeight = 40;
    this.gridOptions1.rowHeight = 120;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.colApi;
    this.gridApi.setRowData(this.rowData);
  }
  onGridReady1(params) {
    this.gridApi1 = params.api;
    this.columnApi1 = params.colApi;
    this.gridApi1.setRowData(this.row);
  }

  qfcTypes = [
    { id: 0, name: '' },
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Email' },
  ];

  onQfcTypeSelected(value: string) {
    this.qfcTypeSelected = value;
    this.gridOptions.rowHeight = this.qfcTypeSelected === '' ? 40 : 120;
    console.log('the row height is :', this.gridOptions.rowHeight);

    this.http
      .get('https://www.ag-grid.com/example-assets/row-data.json')
      .subscribe((data) => {
        this.gridApi.setRowData([]);
        var newData = data;

        this.gridApi.updateRowData({ add: data });
      });
  }

  //   this.service.calendarBooking().subscribe((res: any) => {
  //     for (let i = 0; i < res.data.length; i++) {
  //         //this.data={title:res.data[i].name,date:res.data[i].date}
  //         // Pushing object to array
  //         this.arr.push({
  //              title: res.data[i].name,
  //              date:res.data[i].date
  //         });
  //     }
  //     console.log(this.arr,this.arr[1]);
  // });
}
