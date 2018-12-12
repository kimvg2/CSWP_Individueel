import { Component, OnInit } from '@angular/core';
import { KillerService } from '../killer.service';
import { Killer } from '../server/models/killer';
import {Observable} from "rxjs";

@Component({
  selector: 'app-killers',
  templateUrl: './killers.component.html',
  styleUrls: ['./killers.component.css'],
  providers: [ KillerService ]
})
export class KillersComponent implements OnInit {

  killers: Observable<Killer[]>;

  constructor(killerService: KillerService) {
    this.killers = killerService.getKillers();
  }

  ngOnInit() {
  }

}
