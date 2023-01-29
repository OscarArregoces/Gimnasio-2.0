import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // public presave: any[] =[];
  public saved: any[] =[];

  constructor() { }

  ngOnInit(): void {
    // let presave = JSON.parse(localStorage.getItem('presave')!);
    let saved = JSON.parse(localStorage.getItem('saved')!);

    // if(presave) this.presave = presave;

    if(saved) this.saved = saved;

    // console.log(saved)

  }
}
