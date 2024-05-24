import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";
import { Links } from "../../../assets/links";
import { Router } from "@angular/router";
import { RowComponent } from "../../shared/components/structural/row/row.component";

@Component({
  selector: "rh-navbar",
  standalone: true,
  imports: [NavDropdownComponent, RowComponent, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  links = Links;

  $router = inject(Router);

  navigateToFrontpage(): void {
    this.$router.navigateByUrl("");
  }
}
