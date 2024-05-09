import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[rhMouseoverOutside]",
  standalone: true,
})
export class MouseoverOutsideDirective {
  @Output() rhMouseoverOutside: EventEmitter<boolean> = new EventEmitter();

  @HostListener("document:mouseover", ["$event"])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.elementRef.nativeElement;
    let pointerOutside: boolean = !nativeElement.contains(event.target);
    // console.log(nativeElement);
    console.log(event.target);

    this.rhMouseoverOutside.emit(pointerOutside);
    // if (!clickedInside && this.related !== event.target) {
    // }
  }

  constructor(private elementRef: ElementRef) {}
}
