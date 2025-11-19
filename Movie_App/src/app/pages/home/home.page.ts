import { R3NgModuleMetadataKind } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { IonContentCustomEvent } from '@ionic/core';
import ColorThief from 'colorthief';
import { UtilsHelper } from 'src/app/utils/utils.helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements AfterViewInit{

onScroll(event: any): void {
  //console.log(event.detail.scrollTop);
  this.updateBackgroundColor(event.detail.scrollTop);
}

  private startScrollPoint = 0;
  private initialColor = [0, 0, 0];

  darkModeEnable!: true;

  @ViewChild('posterImage') posterImage!: ElementRef<HTMLImageElement>;

  backgroundColor: string = 'rgb(0, 0, 0,)';
  headerBackgroundColor: string = 'rgba(0, 0, 0, 0.7)';

  constructor() {}
  ngAfterViewInit(): void {
    this.initializeImage();
  }

  private initializeImage(): void {
    const img = this.posterImage.nativeElement;
    img.onload = () => {
      this.startScrollPoint = img.offsetHeight / 2;
      //console.log(this.startScrollPoint)
      this.extractColors(img);
    }

  }
  
  private extractColors(img: HTMLImageElement) {
    const colorThief = new ColorThief();
    const rgbColors = colorThief.getColor(img);
    this.initialColor = rgbColors;
    this.backgroundColor = `rgb(${rgbColors.join(',')})`
  }

  private updateBackgroundColor(scrollTop: number): void {
    if (scrollTop < this.startScrollPoint){
      this.backgroundColor = `rgb(${this.initialColor.join(', ')})`
      return;
    }

    const maxTransitionScroll = 300;
    const distanceScrolled = scrollTop - this.startScrollPoint;
    const progress = Math.min(distanceScrolled / maxTransitionScroll, 1);

    const finalColor = [0, 0, 0];
    const interpolateColor = UtilsHelper.interpolateColor(this.initialColor, finalColor, progress);
    this.backgroundColor = `rgb(${interpolateColor.join(', ')})`;
  }

  ngOnInit(): void {
    this.toggleDarkMode();
  }

  toggleDarkMode(): void {
    document.documentElement.classList.toggle('ion-palette-dark', this.darkModeEnable);
  }

}
