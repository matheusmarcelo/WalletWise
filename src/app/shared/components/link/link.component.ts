import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() public link: string = "";
  @Input() public text: string = "";

  constructor(private readonly router: Router){}

  protected navigateRoute() {
    if(this.link) {
      this.router.navigate([this.link]);
    }
  }
}
