import { Component, Input } from '@angular/core';
import {Item} from '../../model/Item';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-filter-items',
  standalone: true,
  imports: [NgIf],
  templateUrl: './filter-items.component.html',
  styleUrl: './filter-items.component.css'
})
export class FilterItemsComponent {
  @Input() item?: Item | null = null;
}
