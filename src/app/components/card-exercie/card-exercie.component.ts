import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-exercie',
  templateUrl: './card-exercie.component.html',
  styleUrls: ['./card-exercie.component.css']
})
export class CardExercieComponent implements OnInit {

  // public presave: any [] = [];

  @Input() data: any;
  public src: string = "";
  public banderaAdd: boolean = false;
  public banderaDelete: boolean = true;
  public presave: any = {
    titulo: '',
    dia: '',
    ejercicios: []
  }
  constructor() { }

  ngOnInit(): void {
    this.src = `../../../assets/image_jercicios/${this.data.item.type}/${this.data.item.id}.jpg`;

    let dataPresave = JSON.parse(localStorage.getItem('presave')!);
    if(dataPresave) return this.verifyExercie(this.data.item, dataPresave);

    console.log("No se llamó")
  }

  addExercie(data: any) {
    let dataVerify = JSON.parse(localStorage.getItem('presave')!);

    if (!dataVerify) {
      this.presave.ejercicios.push(data)
      this.banderaAdd = true;
      this.banderaDelete = false;
      return localStorage.setItem('presave', JSON.stringify(this.presave));
    }

    this.presave = dataVerify;
    this.presave.ejercicios.push(data)
    this.verifyExercie(data, dataVerify);
    return localStorage.setItem('presave', JSON.stringify(this.presave));
  }

  deleteExercie() {

  }

  verifyExercie(data:any, array:any) {
    // console.log(array.ejercicios)
    array.ejercicios.forEach((element:any) => {
      if(data.id == element.id && data.type == element.type ){
        this.banderaAdd = true;
        this.banderaDelete = false;

      }else{
        this.banderaAdd = false;
        this.banderaDelete = true;
      }
    });
  }

}
