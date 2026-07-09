import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../core/catalog.service';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, RevealDirective],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly categories = inject(CatalogService).categories;

  ngOnInit(): void {
    this.seo.set('Velluto Impex Categories', 'Browse towel, hotel linen, luxury towel, cotton towel, kids towel, premium linen, and bathroom accessory categories.');
  }
}
