import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'content'];
  dataSource: any[] = [];
  list: any = {};
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readList().subscribe((result)=>{
      this.dataSource = result;
    })
  }

  selectList(list: any){
    this.list = list;
  }

  newList(){
    this.list = {};
  }

  createList(item: any){
    this.apiService.createList(item.value).subscribe((result) => {
      console.log(result);
    })
  }

  deleteList(id: number){
    this.apiService.deleteList(id).subscribe((result) => {
      console.log(result);
    })
  }

  updateList(item: any){
    item.value.id = this.list['id'];
    this.apiService.updateList(item.value).subscribe((result) => {
      console.log(result);
    })
  }
}
