import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[rhClickOutside]",
  standalone: true,
})
export class ClickOutsideDirective {
  @Input() anchor?: HTMLElement;
  @Output() rhClickOutside: EventEmitter<void> = new EventEmitter();

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: PointerEvent) {
    const nativeElement: any = this.elementRef.nativeElement;
    const clickedInside: boolean = nativeElement.contains(event.target);

    if (!clickedInside && event.target !== this.anchor) {
      this.rhClickOutside.emit();
    }
  }

  constructor(private elementRef: ElementRef) {}
}
