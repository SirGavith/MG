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
  article!: Article

  get TimeAgo() {
    console.log(this.article.time, Math.floor(Date.now() / 1000))
    return Math.floor(Date.now() / 1000) - this.article.time
  }

  constructor() { }

  ngOnInit(): void {
  }

}
