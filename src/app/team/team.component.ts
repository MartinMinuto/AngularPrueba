import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input('team')
  name: string = 'City';
  status: boolean = false;
  player: string = ''

  constructor() {

  }

  ngOnInit() {
    this.name = 'New City'
  }

  agregarJugador(){
    this.player = 'Marcelo'
  }

  actulizarStatus(event: boolean) {
    this.status = event; 
  }
}
