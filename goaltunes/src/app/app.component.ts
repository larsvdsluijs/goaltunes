import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'goaltunes';

  theme: string;

  constructor() {
    this.theme = document.body.dataset['theme'] || 'light';
  }

  ngOnInit() {
    this.setInitialTheme();
  }

  setInitialTheme() {
    // Stel het thema in op 'dark' wanneer de applicatie laadt
    document.body.dataset['theme'] = 'dark';
    this.theme = 'dark';
  }

  toggleTheme() {
    if(this.theme === 'light')
      this.theme = 'dark';
     else
      this.theme = 'light';
    document.body.dataset['theme'] = this.theme;
  }

}
