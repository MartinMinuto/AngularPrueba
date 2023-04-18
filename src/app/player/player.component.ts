import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input()
  playerName = 'Marcelo'
  teamName = 'March'

  @Output('Activate')
  status: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {

  }

  ngOnInit() {

  }

  activarPlayer(){
    this.status.emit(true)
  }

}
