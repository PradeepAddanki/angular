import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QfcTypeRendererComponent } from './qfc-type-renderer/qfc-type-renderer.component';
import { QfcDefinitionRendererComponent } from './qfc-definition-renderer/qfc-definition-renderer.component';
import { CommentsRendererComponent } from './comments-renderer/comments-renderer.component';
import { WorkflowActionRendererComponent } from './workflow-action-renderer/workflow-action-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    QfcTypeRendererComponent,
    QfcDefinitionRendererComponent,
    CommentsRendererComponent,
    WorkflowActionRendererComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([AppComponent]),
  ],
  providers: [],
  entryComponents: [
    QfcTypeRendererComponent,
    QfcDefinitionRendererComponent,
    CommentsRendererComponent,
    WorkflowActionRendererComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
