import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";

@Component({
  selector: "rh-navbar",
  standalone: true,
  imports: [NavDropdownComponent, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  linker1Anchor = { name: "Dropdown" };
  linker1 = [
    { name: "linker1-1", target: "target" },
    { name: "linker1-2", target: "target" },
    { name: "linker1-3-longer-name", target: "target" },
    { name: "linker1-4", target: "target" },
  ];

  linker2Anchor = { name: "No dropdown", target: "target" };
}
