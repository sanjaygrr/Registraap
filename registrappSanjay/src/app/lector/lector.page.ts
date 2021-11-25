import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource} from '@capacitor/core';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.page.html',
  styleUrls: ['./lector.page.scss'],
})
export class LectorPage implements OnInit {
  Uimage = "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png";
  photo: SafeResourceUrl; 

  constructor() {}

  ngOnInit() {
  }
  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
  }
}
