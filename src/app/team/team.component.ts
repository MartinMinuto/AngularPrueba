import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input('team')
  name: string = 'City';
  status: boolean = true;
  player: string = ''

  constructor() {

  }

  ngOnInit() {
    this.name = 'New City'
  }

  agregarJugador(){
    this.player = 'Marcelo'
  }
}
