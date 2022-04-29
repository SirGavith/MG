import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { FormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ArticleComponent,
    NewArticleComponent,
    MainViewerComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // NgModel,
    // FormsModule,
    RouterModule.forRoot([
      { path: 'new', component: NewArticleComponent },
      { path: '**', component: MainViewerComponent },
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
