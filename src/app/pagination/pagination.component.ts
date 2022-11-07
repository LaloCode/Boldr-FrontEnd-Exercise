import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Item, SwaggerWorkResponse } from '../interfaces/works.interfaces';
import { SwaggerService } from '../services/swagger.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  displayedColumns: string[] = ['title', 'publisher', 'URL'];
  public workList: Item[] = [];

  currentOffset = 0
  length = 200;
  pageSize = 20;
  pageSizeOptions: number[] = [20];

  constructor(private swaggerService: SwaggerService) {}

  ngOnInit(): void {
    this.swaggerService.getWorksList(this.currentOffset).subscribe((resp) => {
      this.workList = resp.message.items;
      console.log(this.workList);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  OnPageChange(event: PageEvent) {
    this.currentOffset = event.pageIndex
    this.swaggerService.getWorksList(this.currentOffset).subscribe((resp) => {
      this.workList = resp.message.items;
    });
  }
}
