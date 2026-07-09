import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService } from '../../core/catalog.service';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-shop',
  imports: [FormsModule, RouterLink, RevealDirective],
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  private readonly catalog = inject(CatalogService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly categories = this.catalog.categories;
  protected readonly search = signal('');
  protected readonly category = signal('all');
  protected readonly visible = signal(8);
  protected readonly loading = signal(true);

  protected readonly products = computed(() => {
    const term = this.search().toLowerCase().trim();
    const selected = this.category();

    return this.catalog.products.filter((product) => {
      const categoryMatch = selected === 'all' || product.category === selected;
      const searchMatch = !term || [product.name, product.shortDescription, product.category].join(' ').toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  });

  protected readonly visibleProducts = computed(() => this.products().slice(0, this.visible()));

  ngOnInit(): void {
    this.seo.set('Velluto Impex Product Catalogue', 'Browse premium towels, bath linen, hotel towels, spa towels, and bathroom accessories without prices or checkout.');
    const initial = this.route.snapshot.queryParamMap.get('category');
    if (initial) {
      this.category.set(initial);
    }
    window.setTimeout(() => this.loading.set(false), 450);
  }

  protected resetVisible(): void {
    this.visible.set(8);
  }

  protected loadMore(): void {
    this.visible.update((value) => value + 4);
  }
}
