import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/service/products.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './admi.component.html',
  styleUrl: './admi.component.css'
})
export class AdmiComponent {
  userid!: string
  token: any = ""
  formEdit! :FormGroup
  FormProduct!: FormGroup
  products! :any
  busqueda = new FormControl
  
  constructor(private productsService: ProductsService, private fb : FormBuilder, private route: ActivatedRoute, private router: Router){
    this.formEdit = this.fb.group({
      name: [''],
      size: [''],
      type:[''],
      imagen:[''],
      price:['']
    }),
    this.FormProduct =this.fb.group({
      name: [''],
      size: [''],
      type:[''],
      imagen:[''],
      price:['']
    })
  }
ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('userid') || '';
    this.formEdit.reset();
  
    this.productsService.getProducts().subscribe({
      next: (resApi: any) => {
        this.products = resApi.products;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
}
  
ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');  
    }
  
    if (!this.token) {
      this.router.navigate(['/login']);  
    }
}  
deleteProduct(id: string) {
  Swal.fire({
      title: "¿Estas seguro que quieres eliminar este producto?",
      text: "No podras revertir esta accion despues",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6ECCBA",
      cancelButtonColor: "#F69D97",
      confirmButtonText: "Si!, quiero borrarlo"
    }).then((result) => {
      if (result.isConfirmed) {
          this.productsService.deleteProduct(id).subscribe({
              next:(resApi:any)=> {
                  this.ngOnInit()
                  Swal.fire({
                      title: "Borrado!",
                      text: "Tu producto ha sido borrado",
                      icon: "success"
                    });
              },
              error:(error:any)=>{
                  console.log(error);
              }
          })
      }
    });
}
getOneProduct (id: string) {
  this.productsService.getOneProduct(id).subscribe({
      next:(resApi: any)=>{
          this.formEdit.setValue({
              name: resApi.product.name,
              size: resApi.product.size,
              type: resApi.product.type,
              imagen: resApi.product.imagen,
              price: resApi.product.price
          })
      },
      error:(error:any)=> {
          console.log(error);
      }
  })
}
update(id: string) {
  if(this.formEdit.valid) {
    Swal.fire({
        title: "Estas seguro de aceptar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "No guardar"
    }).then((result) => {
        if (result.isConfirmed) {
        this.productsService.updateProduct(id, this.formEdit.value).subscribe({
        next:(resApi: any) => {    
        Swal.fire("Saved!", "", "success");
        this.ngOnInit()
    }, error:(error: any) => {
      console.log(error);
      Swal.fire("Changes are not saved", "", "info");
  }
  })
  } else if (result.isDenied) {
    Swal.fire('los cambios no han sido guardados')
  }
});
  } else {
      Swal.fire ({
          title: "formulario incorrecto",
          icon: "warning"
      })
  }
}
trackByFn(index: number, item: any): string {
  return item._id;
}
createProducts(){
this.productsService.createProduct(this.FormProduct.value).subscribe({
  next:(resApi: any)=> {
    Swal.fire({
      icon:'success',
      title:'Producto creado',
      text:'Gracias por crear nuevo producto'
    })

  },error: (error:any) => {
    console.log (error);
    Swal.fire({
      icon:'error',
      title:'Product no registrado',
      text: `${error.error}`
    })
  }
})
}

buscar() {
  this.productsService.busqueda(this.busqueda.value).subscribe({
    next: (resApi: any) => {
      this.products = resApi;
    },
    error: (error: any) => {
      console.log(error);
    },
  });
}

}

