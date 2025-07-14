import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-gender-page',
  imports: [],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  private route = inject(ActivatedRoute);
  public gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));
}
