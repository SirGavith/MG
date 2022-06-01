import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.component';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  title: string = ''
  author: string = ''
  body: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onPublish() {
    const article: Article = {
      name: this.title,
      author: this.author,
      time: Date.now() / 1000,
      body: this.body,
      guid: NewArticleComponent.newGuid(),
    }

    console.log('making web request', article)

    this.http.post('https://mg-functions0.azurewebsites.net/api/HttpTriggerAddNewArticle?',
      JSON.stringify(article)).subscribe(()=>{})
  }

  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
