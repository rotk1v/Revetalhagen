import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { NavLinkAnchor } from "../../../../models";

@Component({
  selector: "rh-dropdown-anchor-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dropdown-anchor-button.component.html",
  styleUrl: "./dropdown-anchor-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownAnchorButtonComponent {
  dropdownOpen = false;

  @Input({ required: true }) mainButton!: NavLinkAnchor;
  @Output() anchorClicked = new EventEmitter<void>();

  clicked(): void {
    this.dropdownOpen = !this.dropdownOpen;
    this.anchorClicked.emit();
  }
}
