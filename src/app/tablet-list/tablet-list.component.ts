import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TabletService } from '../tablet.service';

import { Tablet } from '../tablet';

@Component({
  selector: 'app-tablet-list',
  templateUrl: './tablet-list.component.html',
  styleUrls: ['./tablet-list.component.sass']
})
export class TabletListComponent implements OnInit {

  tablets: Observable<Tablet[]>;



  constructor(private tabletService: TabletService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tablets = this.tabletService.getTabletsList();
  }

  deleteTablet(id: number) {
    this.tabletService.deleteTablet(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  tabletDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}


