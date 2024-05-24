import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from "@angular/core";
import { ClickOutsideDirective } from "../../../directives/click-outside.directive";
import { MouseoverOutsideDirective } from "../../../directives/mouseover-outside.directive";
import { NavLink, NavLinkAnchor } from "../../../models";
import { Router } from "@angular/router";

@Component({
  selector: "rh-nav-dropdown",
  standalone: true,
  imports: [ClickOutsideDirective, MouseoverOutsideDirective, CommonModule],
  templateUrl: "./nav-dropdown.component.html",
  styleUrl: "./nav-dropdown.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdownComponent {
  @Input({ required: true }) mainButton!: NavLinkAnchor;
  @Input() links: NavLink[] = [];

  active = false;

  $router = inject(Router);

  toggleAnchor(): void {
    if (this.mainButton.target) {
      this.navigate(this.mainButton.target);
      return;
    }

    this.active = !this.active;
  }

  navigate(target: string): void {
    this.$router.navigateByUrl(target);
    this.active = false;
  }
}
