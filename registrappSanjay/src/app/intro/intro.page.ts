import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"]
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Logo DuocUC",
      title: "Bienvenido a registrapp!",
      subTitle: "Aplicación oficial de DuocUC para el registro de asitencia",
      description: `no habrá problemas con tu asistencia nuevamente ;)`,
      icon: "arrow-forward"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Logo DuocUC",
      title: "Revisa tu proxima clase",
      subTitle: "Con el calendario de asistencias y clases",
      description: `Con Registrapp solo debes ver en el calendario para proxima actividades con asistencia ya sea pruebas, controles o clases`,
      icon: "calendar"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Logo DuocUC",
      title: "Registra tu asistencia de manera autonoma",
      subTitle: "en Registrapp",
      description: `Solo lee el codigo qr con tu camara o escribe el codigo de acceso!`,
      icon: "finger-print"
    }
  ];
  constructor(private router: Router, private storage: Storage) {}
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {}
}
