import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.set('About Velluto Impex | Premium Textile Expertise', 'Learn about Velluto Impex, our textile standards, manufacturing focus, and hospitality customer commitment.');
  }
}
