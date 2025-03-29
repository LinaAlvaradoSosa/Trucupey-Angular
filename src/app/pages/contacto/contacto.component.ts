import { Component } from '@angular/core';
import { AdmiService } from '../../serviceAdmi/admi.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { log } from 'console';




@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  formSendMessage!: FormGroup

  constructor(private AdmiService: AdmiService, private http: HttpClient, private fb : FormBuilder ) {
    this.formSendMessage = this.fb.group({
      name: ['', []],
      lastName: ['', []],
      email: ['', []],
      message: ['', []]
    })
  }

  sendMessage() {
    this.AdmiService.sendMessage(this.formSendMessage.value).subscribe({
      next: (resApi: any)=>{
        Swal.fire({
          icon:"success",
          title: "Mensaje enviado exitosamente",
          text: `${resApi.name}, Gracias por escribirnos, nos comunicaremos contigo muy pronto`
        })
      },
      error: (error:any) => {
        console.log(error);
        Swal.fire ({
          icon:"error",
          title: "Mensaje no enviado",
          text: "Por favor revisa que todos los campos del formulario esten diligenciados"
        })
      }
    })
  }

  // Tengo que corregir el de contacto porque no esta sirviend, hacer responsive, y la galeria.
  // Esto del contacto debe ser parecido a register!!! debo guiarme del repositorio de Carlos 
}
