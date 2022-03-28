import { Component, Input, OnInit } from '@angular/core';

export interface Article {
  name: string
  author: string
  time: number
  text: string
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article | null = null

  get TimeAgo() {
    if (this.article) return Math.floor(Date.now() / 1000) - this.article.time
    else return null
  }

  ngOnInit(): void { }
}
