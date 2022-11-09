import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
  selector: 'wcg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuButtonOpen') menuButtonOpen!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuNavbar') menuNavbar!: ElementRef<HTMLElement>;
  @ViewChild('MenuButtonClose') menuButtonClose!: ElementRef<HTMLButtonElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLElement>;

  constructor(
    private platformDetectorService: PlatformDetectorService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  menuAppears() {
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.renderer.addClass(this.menuButtonOpen.nativeElement, 'invisible');
      this.renderer.removeClass(this.menuNavbar.nativeElement, 'invisible');
      this.renderer.removeClass(this.overlay.nativeElement, 'invisible');
    }
  }

  menuHidden() {
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.renderer.addClass(this.menuNavbar.nativeElement, 'invisible');
      this.renderer.removeClass(this.menuButtonOpen.nativeElement, 'invisible');
      this.overlay.nativeElement.classList.add('invisible');
    }
  }

  userIsLogged() {
    return true;
  }
}
