import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from "@angular/core";
import { NavLink, NavLinkAnchor } from "../../../models";
import { Router } from "@angular/router";
import { DropdownAnchorButtonComponent } from "./dropdown-anchor-button/dropdown-anchor-button.component";
import {
  NgClickOutsideDelayOutsideDirective,
  NgClickOutsideDirective,
} from "ng-click-outside2";
import { ColumnComponent } from "../../../shared/components/structural/column/column.component";

@Component({
  selector: "rh-nav-dropdown",
  standalone: true,
  imports: [
    CommonModule,
    DropdownAnchorButtonComponent,
    ColumnComponent,
    NgClickOutsideDirective,
    NgClickOutsideDelayOutsideDirective,
  ],
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
