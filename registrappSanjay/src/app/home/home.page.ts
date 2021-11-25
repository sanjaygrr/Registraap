import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  ramos = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 5,
    centerSlides:true,
    speed: 400
  }
  constructor() {}
}
