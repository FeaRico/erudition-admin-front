import {Component, OnInit} from '@angular/core';
import {Item} from "../../../model/item";
import {faPenSquare, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {ItemService} from "../../../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-items-all',
  templateUrl: './items-all.component.html',
  styleUrls: ['./items-all.component.scss']
})
export class ItemsAllComponent implements OnInit {
  items: Item[];
  displayedColums: string[] = ['id', 'name', 'detail', 'delete'];
  icons = new Map([
    ["detail", faPenSquare],
    ["delete", faTrashAlt]
  ]);

  constructor(private itemService: ItemService, private route: Router) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  public getItems(): void {
    this.itemService.getAll().subscribe(result => {
      this.items = result;
      console.log('Items array ' + this.items);
    });
  }

  public deleteItem(id: number): void {
    this.itemService.deleteById(id)
      .subscribe(result => console.log('Deleted item ' + result));
  }

  public openAddPage(): void {
    this.route.navigate(['/items/add']).then(r => console.log(r));
  }
}
