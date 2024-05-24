import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rh-frontpage',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontpageComponent { }
