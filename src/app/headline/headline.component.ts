import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article/article.component';
import { TimeService } from '../time.service';


@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  constructor(private timeService: TimeService) {}

  @Input()
  article!: Article

  @Output() articleClick = new EventEmitter<Article>();

  get DisplayTime() {
    if (this.article) {
      return this.timeService.TimeAgoText(this.article.time)
    }
    return null
  }

  ngOnInit(): void { }

  clicked = () => this.articleClick.emit(this.article)
}
