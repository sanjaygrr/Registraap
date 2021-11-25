import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then(m => m.HomePageModule)
      },
      { path: 'mapa', loadChildren: '../mapa/mapa.module#MapaPageModule' },
      { path: 'lector', loadChildren: '../lector/lector.module#LectorPageModule' },
      { path: 'calculadora', loadChildren: '../calculadora/calculadora.module#CalculadoraPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
