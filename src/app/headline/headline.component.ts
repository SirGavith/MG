import { Component, Input, OnInit } from '@angular/core';

export interface Headline {
  name: string
  author: string
  time: number
}

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input()
  headline!: Headline

  get TimeAgo() {
    return Math.floor(Date.now() / 1000) - this.headline.time
  }

  ngOnInit(): void {
  }

}
