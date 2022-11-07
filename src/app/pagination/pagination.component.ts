import { Component, OnInit } from '@angular/core';
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

  constructor(private swaggerService: SwaggerService) {}

  ngOnInit(): void {
    this.swaggerService.getWorksList().subscribe((resp) => {
      this.workList = resp.message.items;
      console.log(this.workList);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
