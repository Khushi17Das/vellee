import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogService } from '../../core/catalog.service';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

interface Stat {
  label: string;
  target: number;
  suffix: string;
  value: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly catalog = inject(CatalogService);
  private readonly seo = inject(SeoService);
  private timer?: number;

  protected readonly categories = this.catalog.categories.slice(0, 6);
  protected readonly bestSellers = this.catalog.products.filter((product) => product.bestSeller).slice(0, 6);
  protected readonly stats = signal<Stat[]>([
    { label: 'Hospitality collections', target: 42, suffix: '+', value: 0 },
    { label: 'Quality checkpoints', target: 12, suffix: '', value: 0 },
    { label: 'Country reach', target: 2, suffix: '', value: 0 }
  ]);

  ngOnInit(): void {
    this.seo.set('Velluto Impex | Premium Hospitality Linen Australia', 'Explore premium towels, linen, and hospitality textile collections from Velluto Impex.');
    this.animateCounters();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  private animateCounters(): void {
    this.timer = window.setInterval(() => {
      let complete = true;

      this.stats.update((stats) =>
        stats.map((stat) => {
          if (stat.value >= stat.target) {
            return stat;
          }

          complete = false;
          return { ...stat, value: Math.min(stat.target, stat.value + Math.max(1, Math.ceil(stat.target / 24))) };
        })
      );

      if (complete && this.timer) {
        window.clearInterval(this.timer);
      }
    }, 45);
  }
}
