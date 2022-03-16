import { Component, Input, OnInit } from '@angular/core';

export interface Article {
  name: string
  author: string
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

  constructor() { }

  ngOnInit(): void {
  }

}
