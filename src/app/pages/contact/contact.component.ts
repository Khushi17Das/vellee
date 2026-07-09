import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    product: [''],
    message: ['', Validators.required]
  });

  ngOnInit(): void {
    this.seo.set('Contact Velluto Impex', 'Contact Velluto Impex for premium towel, linen, and hospitality textile catalogue enquiries.');
    const product = this.route.snapshot.queryParamMap.get('product');
    if (product) {
      this.form.patchValue({ product });
    }
  }
}
