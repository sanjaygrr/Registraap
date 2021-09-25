import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  validacion = String;

  constructor(
    private alertControl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async validar (nombre: HTMLInputElement, clave: HTMLInputElement)
  {
    let name = nombre.value;
    let password = clave.value;

     if (name.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo nombre",
       });
       await alerta.present();
     }

     else if (password.trim() == "")
     {
       const alerta = await this.alertControl.create({
         header: "Falta información",
         message: "Por favor ingrese información en el campo contraseña"
       });
       await alerta.present();
     }

     else
     {
      this.router.navigate(['/pagina3'])
     }
  }

}
