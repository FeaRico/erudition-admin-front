import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ItemsComponent} from "./items/items.component";
import {ItemsAllComponent} from "./items/items-all/items-all.component";
import {ItemsAddComponent} from "./items/items-add/items-add.component";
import {ItemsDetailComponent} from "./items/items-detail/items-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'items',
    component: ItemsComponent,
    children: [
      {path: '', redirectTo: 'all', pathMatch: 'full'},
      {path: 'all', component: ItemsAllComponent},
      {path: 'add', component: ItemsAddComponent},
      {path: 'detail/:id', component: ItemsDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
