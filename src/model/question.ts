import {Item} from "./item";

export class Question{
  id!: number;
  text!: string;
  item!: Item;
  imagePath?: string;
}
