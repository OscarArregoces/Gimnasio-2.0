import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  public saved: any = {};
  public index: any;
  public Titulo: any;
  public Dia: any;



  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('saved')!)

    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.saved = data[params['index']]
    })

    this.Titulo = this.saved.titulo;
    this.Dia = this.saved.dia;

    console.log(this.saved)
  }

}
