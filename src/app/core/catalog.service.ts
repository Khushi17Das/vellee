import { Injectable } from '@angular/core';
import { Category, Product } from './models';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly categories: Category[] = [
    { id: 'bath', name: 'Bath Towels', slug: 'bath-towels', description: 'Soft, absorbent essentials for daily bath programs.', image: 'assets/images/categories/category-bath.svg', count: 18 },
    { id: 'hand', name: 'Hand Towels', slug: 'hand-towels', description: 'Compact towels for guest rooms, spas, and washrooms.', image: 'assets/images/categories/category-hand.svg', count: 12 },
    { id: 'face', name: 'Face Towels', slug: 'face-towels', description: 'Gentle touch cotton face towels for refined care rituals.', image: 'assets/images/categories/category-face.svg', count: 10 },
    { id: 'beach', name: 'Beach Towels', slug: 'beach-towels', description: 'Resort-scale towels with generous coverage and color.', image: 'assets/images/categories/category-beach.svg', count: 8 },
    { id: 'hotel', name: 'Hotel Towels', slug: 'hotel-towels', description: 'Durable hospitality towels built for frequent laundering.', image: 'assets/images/categories/category-hotel.svg', count: 14 },
    { id: 'luxury', name: 'Luxury Towels', slug: 'luxury-towels', description: 'Elevated pile, elegant finishes, and a premium hand feel.', image: 'assets/images/categories/category-luxury.svg', count: 11 },
    { id: 'cotton', name: 'Cotton Towels', slug: 'cotton-towels', description: 'Breathable cotton textures for reliable everyday comfort.', image: 'assets/images/categories/category-cotton.svg', count: 9 },
    { id: 'kids', name: 'Kids Towels', slug: 'kids-towels', description: 'Bright, soft, quick-drying towels for family stays.', image: 'assets/images/categories/category-kids.svg', count: 7 },
    { id: 'linen', name: 'Premium Linen', slug: 'premium-linen', description: 'Elegant bed and bath linen for hospitality presentation.', image: 'assets/images/categories/category-linen.svg', count: 6 },
    { id: 'accessories', name: 'Bathroom Accessories', slug: 'bathroom-accessories', description: 'Curated finishing touches for guest-ready bathrooms.', image: 'assets/images/categories/category-accessories.svg', count: 8 },
  ];

  readonly products: Product[] = [
    this.product(1, 'Velluto Cloud Bath Towel', 'bath-towels', 'assets/real img/bath towel.png', 'Best Seller', 'A plush bath towel designed for soft loft, balanced weight, and everyday hospitality programs.', ['White', 'Cream', 'Charcoal', 'Navy'], true),
    this.product(2, 'Signature Hotel Towel Set', 'hotel-towels', 'assets/real img/hotel towel set.png', 'Hospitality', 'A coordinated set for guest rooms that pairs refined presentation with durable construction.', ['White', 'Cream', 'Taupe'], true),
    this.product(3, 'Spa Hand Towel Pair', 'hand-towels', 'assets/real img/hand towel.png', 'Spa Grade', 'Compact hand towels with a smooth border and a calm, premium finish for vanity areas and spa settings.', ['White', 'Sage', 'Stone'], true),
    this.product(4, 'Pure Cotton Face Towel', 'face-towels', 'assets/real img/face towel.png', 'Gentle', 'A soft face towel with a clean weave and gentle touch for wellness and skincare spa programs.', ['White', 'Blush', 'Slate'], false),
    this.product(5, 'Resort Beach Towel', 'beach-towels', 'assets/real img/Beach towel.png', 'Resort', 'A generous beach towel with relaxed texture, statement color, and quick comfort after water activities.', ['Ocean Blue', 'Sand', 'Coral', 'Emerald'], true),
    this.product(6, 'Luxe Rib Bath Sheet', 'luxury-towels', 'assets/real img/luxury bath sheet.png', 'Luxury', 'An oversized bath sheet with ribbed detail, high absorbency, and a beautifully weighted drape.', ['White', 'Ivory', 'Silver', 'Graphite'], true),
    this.product(7, 'Everyday Cotton Towel Bundle', 'cotton-towels', 'assets/real img/cotton towel bundle.png', 'Bundle', 'A practical cotton bundle created for volume programs without sacrificing quality or comfort.', ['Natural', 'White', 'Oatmeal'], false),
    this.product(8, 'Kids Soft Wrap Towel', 'kids-towels', 'assets/real img/kids towel.png', 'Family', 'A cheerful wrap towel with a soft hand feel for family accommodation and childcare settings.', ['Sky Blue', 'Sunshine', 'Mint', 'Lavender'], false),
    this.product(9, 'Premium Linen Waffle Robe', 'premium-linen', 'assets/real img/premium linen waffle robe.png', 'Linen', 'A breathable waffle robe with relaxed structure, ideal for spa suites and premium guest experiences.', ['White', 'Natural', 'Charcoal'], false),
    this.product(10, 'Guest Vanity Towel Roll', 'bathroom-accessories', 'assets/real img/vanity towels.png', 'Accessory', 'Rolled vanity towels that make bathrooms feel considered, clean, and professionally appointed.', ['White', 'Cream'], false),
    this.product(11, 'Executive Bath Mat', 'bathroom-accessories', 'assets/real img/bath mat.png', 'Bath Mat', 'A dense cotton bath mat with secure texture and a crisp border for hotel bathroom settings.', ['White', 'Champagne', 'Charcoal'], false),
    this.product(12, 'Heritage Border Towel', 'luxury-towels', 'assets/real img/luxury border towel.png', 'Premium', 'A refined towel with a classic border, plush body, and understated luxury for discerning buyers.', ['White', 'Ecru', 'Taupe', 'Slate'], false),
  ];

  getProduct(slug: string | null): Product | undefined {
    return this.products.find((product) => product.slug === slug);
  }

  getCategory(slug: string): Category | undefined {
    return this.categories.find((category) => category.slug === slug);
  }

  relatedProducts(product: Product): Product[] {
    return this.products
      .filter((item) => item.slug !== product.slug && item.category === product.category)
      .concat(this.products.filter((item) => item.slug !== product.slug && item.bestSeller))
      .slice(0, 3);
  }

  private product(id: number, name: string, category: string, image: string, badge: string, shortDescription: string, colors: string[], bestSeller: boolean): Product {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return {
      id,
      name,
      slug,
      category,
      image,
      gallery: [image, 'assets/real img/Company story.png', 'assets/real img/why choose velluto impex.png'],
      badge,
      shortDescription,
      description: `${shortDescription} Designed for Velluto Impex's premium catalogue, this piece balances tactile comfort, clean presentation, and practical laundering performance for professional hospitality environments.`,
      features: ['Premium hand feel', 'High absorbency', 'Elegant woven border', 'Suitable for hospitality programs', 'Color options for curated interiors'],
      material: 'Combed cotton rich terry with refined finishing',
      sizes: ['Face 33 x 33 cm', 'Hand 40 x 70 cm', 'Bath 70 x 140 cm', 'Bath Sheet 90 x 160 cm'],
      colors,
      specifications: {
        GSM: bestSeller ? '600-700 GSM' : '500-650 GSM',
        Finish: 'Soft terry pile with durable border',
        Use: 'Hotels, resorts, spas, serviced apartments, premium home linen',
        Origin: 'Curated for Australia and India hospitality requirements'
      },
      care: ['Machine wash warm with similar colors', 'Avoid bleach and optical brighteners', 'Tumble dry low to preserve loft', 'Wash before first use for best absorbency'],
      bestSeller
    };
  }
}
