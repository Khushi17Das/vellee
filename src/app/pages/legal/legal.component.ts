import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly type = computed(() => this.route.snapshot.data['type'] as 'privacy' | 'terms');
  protected readonly title = computed(() => (this.type() === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'));

  ngOnInit(): void {
    this.seo.set(`${this.title()} | Velluto Impex`, `Professional ${this.title().toLowerCase()} content for the Velluto Impex catalogue website.`);
  }
}
