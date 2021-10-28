import { Component, OnInit } from '@angular/core';

interface Data {
  name:string;
  date:string;
  id:string;
  mony:string;
}
@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {
  players:Data[] = [
    {
      "name":"mahdi abdulkareem",
      "date":"13-9-2020",
      "mony":"150",
      "id":"404365785"
  },
    {
      "name":"ali fathi",
      "date":"12-9-2020",
      "mony":"50",
      "id":"404365785"
  },
    {
      "name":"ahmad abuguze",
      "date":"12-9-2020",
      "mony":"90",
      "id":"404365785"
  },
    {
      "name":"mohammad nawahda asdas ",
      "date":"12-7-2020",
      "mony":"50",
      "id":"404365785"
  },
  ]
  filteredArray :Data[] = this.players;
  searchText = ""
  constructor() { }
  
  ngOnInit(): void {
    
  }
  filterArray(event:string){
    this.filteredArray = this.players.filter((item) => item.name.includes(event) || item.date.includes(event))
  }
}
