import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { QfcTypeRendererComponent } from './qfc-type-renderer/qfc-type-renderer.component';
import { QfcDefinitionRendererComponent } from './qfc-definition-renderer/qfc-definition-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gridApi;
  columnApi;
  gridOptions: GridOptions = {};
  qfcTypeInputArray = ['Email', 'Phone', 'Mobile'];
  qfcTypeSelected = '';
  //qfcTypeBtnFlag = this.qfcTypeSelected ? true : false;

  columnDefs: ColDef[] = [
    { field: 'make', checkboxSelection: true },
    {
      field: 'model',
      cellRendererFramework: QfcTypeRendererComponent,
    },
    {
      field: 'price',
      cellRendererFramework: QfcDefinitionRendererComponent,
    },
  ];

  rowData = [
    { make: '', model: 'Raajaa', price: 80000 },
    { make: '', model: 'Ramaa', price: 90000 },
    { make: '', model: 'Ramya', price: 87000 },
  ];

  column: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  row = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  //rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    //this.gridOptions.rowHeight = 70;
    //   this.rowData = this.http.get<any[]>(
    //     'https://www.ag-grid.com/example-assets/row-data.json'
    //   );
    this.gridOptions.rowHeight = 40;
  }

  OnGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.colApi;
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
