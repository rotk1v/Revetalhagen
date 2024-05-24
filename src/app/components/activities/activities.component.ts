import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SanityService } from "../../services/sanity.service";

@Component({
  selector: "rh-activities",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./activities.component.html",
  styleUrl: "./activities.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent {
  activitiesObs = inject(SanityService).getEvents();
}
