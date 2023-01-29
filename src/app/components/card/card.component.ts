import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public src:string = '';
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
    this.src = `../../../assets/image_jercicios/${this.data.type}/${this.data.id}.jpg`;
    console.log(this.data)
  }

}
