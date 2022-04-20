import { Component } from '@angular/core';
import { Article } from 'src/app/article/article.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';

  article_list: Article[] = []; 

  selected_article: Article | null = this.article_list[0]

  onArticleClick = (event: Article) => this.selected_article = event

  constructor(private http: HttpClient) {
    console.log('making web request', this.http)

    this.http.get<Article[]>('https://mg-functions0.azurewebsites.net/api/HttpTriggerFetchAll', {
      responseType: 'json',
    }).subscribe((data: Article[]) => {
      console.log('subscribed', data)
      this.article_list = data
    })

  }
}
