import { ProductsService } from './../../../products/services/products.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  private productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  public productsResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productsService.getProductByIdSlug(request.idSlug),
  });
}
