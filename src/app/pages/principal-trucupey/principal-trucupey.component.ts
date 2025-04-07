import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal-trucupey',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './principal-trucupey.component.html',
  styleUrl: './principal-trucupey.component.css'
})
export class PrincipalTrucupeyComponent {
  token: any = ""

  constructor(private router: Router){}

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');  
    }
  
    if (!this.token) {
      this.router.navigate(['/login']);  
    }
} 
}
