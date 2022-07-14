import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/app.component';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss'],
})
export class CardHeroComponent implements OnInit {
  // @Input() var: type;
  // @Output() emitChangeTeam = new EventEmitter();
  @Input() public hero!: Hero;
  @Output() emitChangeTeam = new EventEmitter<Hero>();
  constructor() {}

  ngOnInit(): void {}

  public changeTeam(): void {this.emitChangeTeam.emit(this.hero)}
}