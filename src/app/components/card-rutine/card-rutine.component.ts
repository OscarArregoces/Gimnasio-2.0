import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rutine',
  templateUrl: './card-rutine.component.html',
  styleUrls: ['./card-rutine.component.css']
})
export class CardRutineComponent implements OnInit {


  @Input() data: any;
  @Input() index: any;

  public src:any;
  constructor() { }

  ngOnInit(): void {

    this.src = `ver-rutina/${this.index.i}`
  }

}
