import { Component } from '@angular/core';
import { Item } from '../../model/Item';
import { ItemService } from '../../service/item.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from '@angular/common';
import {FilterItemsComponent} from '../filter-items/filter-items.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf, FilterItemsComponent],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService, FilterItemsComponent]
})
export class ItemListComponent {
  item: Item | null = null;
  itemId: number = 0;
  activeTab: string = 'getItem';

  selectedCategory: string = '';
  selectedGender: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  filteredItems: Item[] = [];

  constructor(private itemService: ItemService) {}

  getItemById() {
    this.itemService.getItemById(this.itemId).subscribe((data) => {
      this.item = data;
    });
  }

  filterByCategory() {
    // Implement filtering logic based on selectedCategory
  }

  filterByGender() {
    // Implement filtering logic based on selectedGender
  }

  filterByPrice() {
    // Implement filtering logic based on minPrice and maxPrice
  }
}
