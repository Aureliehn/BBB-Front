import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})  
export class HeaderComponent {
  @ViewChild('bgVideo') bgVideo: ElementRef;
  @ViewChild('bgImage') bgImage: ElementRef;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.renderer.setStyle(this.bgImage.nativeElement, 'display', 'none');
    console.log(this.bgVideo);
    this.bgVideo.nativeElement.addEventListener('loadeddata', () => {
      this.bgVideo.nativeElement.addEventListener('ended', () => {
        this.renderer.setStyle(this.bgVideo.nativeElement, 'display', 'none');
        this.renderer.setStyle(this.bgImage.nativeElement, 'display', 'block');
      });
    });
  }

}


