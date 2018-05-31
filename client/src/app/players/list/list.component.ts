import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this.api.get('players').subscribe(responses => {
      this.players = responses;
      console.log(this.players);
    })
  }

  removePlayer(playerId){
    this.api.delete(`players/${playerId}`).subscribe(res => {
      console.log(res);
      this.getAllPlayers();
    });
  }

}
