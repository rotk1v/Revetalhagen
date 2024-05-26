import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { SanityService } from "../../services/sanity.service";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { FrontPage, Section } from "../../models";
import { RowComponent } from "../../shared/components/structural/row/row.component";
import { ColumnComponent } from "../../shared/components/structural/column/column.component";
import { ImageSliderComponent } from "../../shared/components/image-slider/image-slider.component";

@Component({
  selector: "rh-frontpage",
  standalone: true,
  imports: [CommonModule, RowComponent, ColumnComponent, ImageSliderComponent],
  templateUrl: "./frontpage.component.html",
  styleUrl: "./frontpage.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontpageComponent {
  images$ = this.sanityService.getFrontPageImages();
  sections$ = this.sanityService.getFrontPageSections();

  constructor(private sanityService: SanityService) {}

  getImageUrl(source: SanityImageSource): ImageUrlBuilder {
    return this.sanityService.imgUrlFor(source);
  }

  getContentText(section: Section): string {
    return this.sanityService.getSectionContent(section);
  }
}
