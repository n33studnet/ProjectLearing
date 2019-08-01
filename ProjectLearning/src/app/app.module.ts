import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { FileSelectDirective } from 'ng2-file-upload';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';


import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
        MatSelectModule, MatIconModule, MatButtonModule,MatTableModule,
        MatCardModule, MatTabsModule, MatDividerModule, MatSnackBarModule,
        MatTooltipModule, MatSidenavModule, MatChipsModule, MatBottomSheetModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {IssueService} from './issue.service';
import {HighlightService} from './highlight.service';

import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcomponentComponent,
    CreateComponentComponent,
    EditComponentComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxEditorModule,
    FormsModule,
    MatSidenavModule,
    AngularEditorModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatChipsModule,
    MatBottomSheetModule,
    BrowserAnimationsModule
  ],

  providers: [IssueService, HighlightService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
