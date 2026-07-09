import { Component, OnInit, computed, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService } from '../../core/catalog.service';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-product-details',
  imports: [KeyValuePipe, RouterLink, RevealDirective],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  private readonly catalog = inject(CatalogService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly product = computed(() => this.catalog.getProduct(this.route.snapshot.paramMap.get('slug')));
  protected readonly related = computed(() => {
    const product = this.product();
    return product ? this.catalog.relatedProducts(product) : [];
  });

  ngOnInit(): void {
    const product = this.product();
    this.seo.set(
      product ? `${product.name} | Velluto Impex` : 'Product Details | Velluto Impex',
      product?.shortDescription ?? 'View Velluto Impex product details, features, sizes, materials, specifications, and care instructions.',
      product?.image
    );
  }
}
