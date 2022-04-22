import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    HttpClientModule,
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
