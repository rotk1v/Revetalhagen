import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";

export interface RowOptions {
  justify?: "space-between" | "center" | "flex-start";
  align?: "space-between" | "center" | "flex-start";
  gap?: string;
  wrap?: "wrap" | "nowrap";
}

@Component({
  selector: "rh-row",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./row.component.html",
  styleUrl: "./row.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowComponent {
  private defaults: RowOptions = {
    justify: "space-between",
    align: "flex-start",
    wrap: "wrap",
  };

  @Input() options?: RowOptions;

  @HostBinding("style.justify-content") get justifyStyle(): string {
    return this.options?.justify ?? this.defaults.justify!;
  }

  @HostBinding("style.align-items") get alignStyle(): string {
    return this.options?.align ?? this.defaults.align!;
  }

  @HostBinding("style.flex-wrap") get wrapStyle(): string {
    return this.options?.wrap ?? this.defaults.wrap!;
  }

  @HostBinding("style.gap") get gapStyle(): string | undefined {
    return this.options?.gap;
  }
}
