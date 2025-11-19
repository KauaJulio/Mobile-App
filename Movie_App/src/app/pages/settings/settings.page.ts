import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkModeEnable: true = true;

  constructor() { }
  ngOnInit(): void {
    this.toggleDarkMode();
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('ion-palette-dark', this.darkModeEnable);
  }

}
