import { Component, inject } from '@angular/core';
import { AdmiService } from '../../serviceAdmi/admi.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  admiService = inject(AdmiService)
  Formlogin! : FormGroup

  constructor(private fb: FormBuilder, private router: Router){
    this.Formlogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  ngOnInit() {
    if (this.admiService.obtenerToken()) {
      this.router.navigate(['administracion']);
    }
  }
  login(){
    if (this.Formlogin.valid) {
        this.admiService.login(this.Formlogin.value).subscribe({
            next:(resApi: any)=>{
              if(resApi && resApi.token) {
                this.admiService.guardarToken(resApi.token);
                this.router.navigate(['administracion'])
              }
                Swal.fire({
                    icon:'success',
                    title:'Bienvenido a la cuenta administrativa de Trucupey',
                    text: ''
                });
            },
            error:(error:any) => {
                console.log(error)
                Swal.fire({
                    icon:'error',
                    title:'Ups! algo esta mal',
                    text: `${error.error}`
              })
            }
        })
            } else {
          Swal.fire({
              icon:'warning',
              title:'Formulario Incorrecto',
              text:'por favor diligencie correctamente el formulario'
          })
      }
    }
}
