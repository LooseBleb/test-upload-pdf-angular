import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogCreateCategorysComponent } from './app.component';
import { TrabsComponent } from './components/trabs/list-trabs/trabs.component';
import { TrabsService } from './services/trabs.service';
import { DialogDeleteCategorysComponent } from './components/trabs/list-trabs/trabs.component';


import {HttpClientModule} from '@angular/common/http';
import {HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { JwtModule } from '@auth0/angular-jwt';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrabComponent } from './components/trabs/trab/trab.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TrabsComponent,
    DialogDeleteCategorysComponent,
    TrabComponent,
    DialogCreateCategorysComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MaterialFileInputModule,
    MatProgressBarModule,
    MatDialogModule
    
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    TrabsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
