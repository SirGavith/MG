import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor() { }

  TimeAgo(time: number) {
    if (time) return Math.floor(Date.now() / 1000) - time
    else return null
  }

  TimeAgoText(time: number) {
    let t = this.TimeAgo(time)
    if (!t) return null
    if (t < 60) {
      return `${t} seconds ago`
    }
    else if (t < 3600) {
      return `${Math.floor(t/60)} minutes ago`
    }
    else if (t < 86_400) {
      return `${Math.floor(t/3600)} hours ago`
    }
    else if (t < 1_209_600) {
      return `${Math.floor(t/86_400)} days ago`
    }
    else if (t < 2_678_400) {
      return `${Math.floor(t/604800)} weeks ago`
    }
    else {
      return `${Math.floor(t/2_678_400)} months ago`
    }
  }
}
