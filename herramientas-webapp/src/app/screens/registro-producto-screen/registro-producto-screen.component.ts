import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})
export class RegistroProductoScreenComponent implements OnInit {

   //Aquí van las variables
   public editar:boolean = false;
   public product: any = {};
    //Para detectar errores
   public error: any ={};
 
   constructor(
     private router: Router,
     private location: Location,
     private productoService: ProductoService
   ) {
     // No debes asignar el valor de 'picker' aquí
   }
 
   ngOnInit(): void {
     this.product = this.productoService.esquemaProduct();
     console.log("Product: ", this.product);
   }
 
   public regresar() {
     this.location.back();
   }

   public home() {
    this.router.navigate([""]);
  }

   public registrar() { //No todas las rutas de acceso devuelven un valor
     this.error = [];
 
     this.error = this.productoService.validarProducto(this.product);
     if (!$.isEmptyObject(this.error)) {
       console.log("Product: ", this.error);
       return false;
     }else{
      alert("Todo chido vamos a registrar");
      this.router.navigate([""]);
    }
   }
}