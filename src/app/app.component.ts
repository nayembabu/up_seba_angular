import { Component, OnInit } from '@angular/core';
import { Centry } from './allModel/centry.model';
import { Upsetting } from './allModel/upsetting.model';
import { UpSettingService } from "./allServices/upSetting.service";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title ="hi";

  name_text: any;
  father_text: any;
  mothe_text: any;
  nid_birth_text: any;
  
  cerDatabyID: Centry = new Centry;

  settingInfo: Upsetting = new Upsetting;

  constructor(
    private baseSetting : UpSettingService
  ) {}
  ngOnInit(): void {
    
    this.baseSetting.getUpSettingData().subscribe( kl => {
      this.settingInfo = kl;
    })
    
  }

  getCerId(typedID: any): void {
    this.baseSetting.getCertificateByCerId(typedID).subscribe(getData => {
      this.cerDatabyID = getData;
      
      this.name_text = 'Name';
      this.father_text = 'Father';
      this.mothe_text = 'Mother';
      this.nid_birth_text = 'Nid / Birth';

    })

  }
  
}
