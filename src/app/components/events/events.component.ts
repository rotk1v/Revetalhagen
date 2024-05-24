import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SanityService } from "../../services/sanity.service";
import {
  EventContent,
  EventContentMarkDef,
  EventContentText,
} from "../../models";
import { formatDateString } from "../../helpers/date-helper";

@Component({
  selector: "rh-events",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./events.component.html",
  styleUrl: "./events.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  eventsObj = inject(SanityService).getEvents();

  // there can be more than one mark per text entry.
  // both h1 and bold. link + bold ...
  // TODO
  formatText(
    contentText: EventContentText,
    markDefs: EventContentMarkDef[]
  ): string {
    if (contentText.marks.length > 0) {
      const mark = contentText.marks[0];
      const defined = markDefs.find((x) => x.markId === mark);
      // defined === undefined -> style tag, else its a link (for now)
      if (defined === undefined) {
        return `${"<" + mark + ">"}${contentText.value}${"</" + mark + ">"}`;
      }
      return `<link href="${defined.target}">${contentText.value}</link>`;
    }

    return contentText.value;
  }

  formatDate(dateString?: string): string {
    return dateString !== undefined ? formatDateString(dateString) : "";
  }
  // generateContent(rawContent: EventContent[]): string {
  //   let content = rawContent
  //     .flatMap((x) => x.text.map((x) => x.value))
  //     .join("");
  //   return content;
  // }
}
