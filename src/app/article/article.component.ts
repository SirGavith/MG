import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

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
  constructor(private timeService: TimeService) {}

  @Input()
  article: Article | null = null

  get DisplayTime() {
    if (this.article) {
      return this.timeService.TimeAgoText(this.article.time)
    }
    return null
  }

  ngOnInit(): void { }
}
