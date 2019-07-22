import { Component, OnInit } from '@angular/core';
import { Tablet } from '../tablet';
import { TabletService } from '../tablet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tablet-details',
  templateUrl: './tablet-details.component.html',
  styleUrls: ['./tablet-details.component.sass']
})
export class TabletDetailsComponent implements OnInit {

  id: number;
  tablet: Tablet;

  constructor(private route: ActivatedRoute, private router: Router, private tabletService: TabletService) { }

  ngOnInit() {
    this.tablet = new Tablet();

    this.id = 2;

    this.tabletService.getTablet(this.id)
      .subscribe(data => {
        console.log(data),
        this.tablet = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }

}
