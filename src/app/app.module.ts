import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonGroupsComponent } from './components/person-groups/person-groups.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FaceIdComponent } from './components/face-id/face-id.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonGroupsComponent,
    PersonsComponent,
    FaceIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
