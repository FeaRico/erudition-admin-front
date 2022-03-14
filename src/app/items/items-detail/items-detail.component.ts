import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Item} from "../../../model/item";

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss'],
  providers: [ItemService]
})
export class ItemsDetailComponent implements OnInit {
  item: Item | undefined;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getItem();
  }

  public getItem(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.itemService.getById(id)
      .subscribe(result => {
        this.item = result;
        console.log('Find item ' + result);
      });
  }

  public saveItem(): void {
    if (this.item)
      this.itemService.update(this.item)
        .subscribe(result => console.log(result));
    this.backToPage();
  }

  public backToPage(): void {
    this.location.back();
  }
}
