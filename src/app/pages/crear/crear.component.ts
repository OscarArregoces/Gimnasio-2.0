import { Component, OnInit } from '@angular/core';
import { ExercieServiceService } from 'src/app/core/exercie-service.service';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public ejercicio_actual: string = 'ninguno';
  public saved: any[] = [];

  formsValue = this.fb.group({
    titulo: ['', Validators.required],
    dia: ['', Validators.required],
  })

  constructor(public exercie_service: ExercieServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }


  saveRutine() {
    let data = JSON.parse(localStorage.getItem('presave')!);
    console.log(data)

    if (data) {
      data.titulo = this.formsValue.value.titulo;
      data.dia = this.formsValue.value.dia;


      let current = JSON.parse(localStorage.getItem('saved')!);

      if(!current){
        this.saved.push(data)
        localStorage.setItem('saved', JSON.stringify(this.saved));
      }else{
       current.push(data);
       localStorage.setItem('saved', JSON.stringify(current));
      }
     
      


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Rutina guardada',
        showConfirmButton: false,
        timer: 1500
      })

      console.log(  JSON.parse(localStorage.getItem('saved')!))
      
      this.router.navigateByUrl('')
      return localStorage.removeItem('presave');
    }

    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
