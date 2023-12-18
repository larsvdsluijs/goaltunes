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
    const storedTheme = localStorage.getItem('theme');

    // Check if storedTheme is not null before assignment
    if (storedTheme !== null) {
      document.body.dataset['theme'] = storedTheme;
      this.theme = storedTheme; // Safe to assign as it's guaranteed not to be null here
    } else {
      // If storedTheme is null, set the theme to 'dark'
      document.body.dataset['theme'] = 'dark';
      this.theme = 'dark';
    }
  }

  toggleTheme() {
    if(this.theme === 'light') {
      this.theme = 'dark';
      localStorage.setItem('theme', this.theme);
    }
     else {
      this.theme = 'light';
      localStorage.setItem('theme', this.theme);
    }
    document.body.dataset['theme'] = this.theme;
  }

}
