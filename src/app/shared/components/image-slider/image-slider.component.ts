import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Observable } from "rxjs";
import { Image } from "../../../models";
import { SanityService } from "../../../services/sanity.service";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

@Component({
  selector: "rh-image-slider",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./image-slider.component.html",
  styleUrl: "./image-slider.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent {
  @Input() images: Image[] | null = [];

  constructor(private sanityService: SanityService) {}

  getImage(imageSource: SanityImageSource): ImageUrlBuilder {
    return this.sanityService.imgUrlFor(imageSource);
  }
}
