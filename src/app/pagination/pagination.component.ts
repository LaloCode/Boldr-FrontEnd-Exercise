import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../services/swagger.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor(private swaggerService: SwaggerService) {}

  ngOnInit(): void {
    this.swaggerService.getWorksList().subscribe((resp) => {
      console.log(resp.message.items);
    });
  }
}
