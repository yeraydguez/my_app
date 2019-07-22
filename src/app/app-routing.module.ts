import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { TabletListComponent } from './tablet-list/tablet-list.component';
import { TabletDetailsComponent } from './tablet-details/tablet-details.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'tablets', component: TabletListComponent },
  { path: 'details/:id', component: TabletDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
