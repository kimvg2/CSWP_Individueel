import { Component, OnInit } from '@angular/core';
import { Killer } from '../../server/models/killer'
import {KillerService} from "../../killer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css']
})
export class KillerListComponent implements OnInit {

  title = 'Killers';
  killers: Killer[];

  constructor(
    private router: Router,
    private killerService: KillerService
  ) { }

  ngOnInit() {
  }

}
