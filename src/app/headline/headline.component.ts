import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article/article.component';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input()
  article!: Article

  @Output() articleClick = new EventEmitter<Article>();

  get TimeAgo() {
    return Math.floor(Date.now() / 1000) - this.article.time
  }

  ngOnInit(): void {
  }

  clicked() {
    this.articleClick.emit(this.article);
  }
}
