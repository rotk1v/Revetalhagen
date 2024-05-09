import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ClickOutsideDirective } from "../../../directives/click-outside.directive";
import { MouseoverOutsideDirective } from "../../../directives/mouseover-outside.directive";

export interface NavLink {
  name: string;
  target: string;
}

export interface NavLinkAnchor {
  name: string;
  target?: string;
}

@Component({
  selector: "rh-nav-dropdown",
  standalone: true,
  imports: [ClickOutsideDirective, MouseoverOutsideDirective, CommonModule],
  templateUrl: "./nav-dropdown.component.html",
  styleUrl: "./nav-dropdown.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdownComponent {
  @Input({ required: true }) mainButton: NavLinkAnchor = { name: "" };
  @Input() links: NavLink[] = [];

  active = false;

  toggleAnchor(): void {
    if (this.mainButton.target) {
      // navigate to target
      this.navigate(this.mainButton.target);
      return;
    }

    this.active = !this.active;
  }

  navigate(target: string): void {
    // navigate to target
    console.log(target);
  }
}
