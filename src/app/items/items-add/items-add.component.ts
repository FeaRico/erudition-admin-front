import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {Location} from "@angular/common";
import {Item} from "../../../model/item";

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.scss']
})
export class ItemsAddComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService, private location: Location) {
  }

  ngOnInit(): void {
  }

  public add(name: string, imagePath: string): void {
    name = name.trim();
    imagePath = imagePath.trim();
    let itemObject = <Item>{name, imagePath};
    this.itemService.create(itemObject)
      .subscribe(result => console.log(result));
    this.backToPage();
  }

  public backToPage(): void {
    this.location.back();
  }
}
