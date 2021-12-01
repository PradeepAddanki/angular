import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QfcTypeRendererComponent } from './qfc-type-renderer/qfc-type-renderer.component';
import { QfcDefinitionRendererComponent } from './qfc-definition-renderer/qfc-definition-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    QfcTypeRendererComponent,
    QfcDefinitionRendererComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([AppComponent]),
  ],
  providers: [],
  entryComponents: [QfcTypeRendererComponent, QfcDefinitionRendererComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
