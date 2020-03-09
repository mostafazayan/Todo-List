import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AddEditTaskComponent } from './pages/main/add-edit-task/add-edit-task.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoundedDirective } from './dirictives/rounded.directive';

@NgModule({
  declarations: [AppComponent, MainComponent, AddEditTaskComponent, RoundedDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents: [AddEditTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
