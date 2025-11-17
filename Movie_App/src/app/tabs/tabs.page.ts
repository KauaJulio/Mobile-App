import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild(IonTabs) tabs?: IonTabs;

  constructor() { }

  ngOnInit() {
  }

}
