import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuyaService } from '../ruya.service';


@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public ruyaId:any ;
  public ruyalarim: any;
  public bilgi: any;
  public kelime:string;
  
  constructor(private activatedRoute: ActivatedRoute, private ruyalariGetir: RuyaService ) { }

  ngOnInit() {
    this.ruyaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.kelime = this.activatedRoute.snapshot.paramMap.get('kelime');
    console.log("kelime;"+this.kelime);
    console.log("ruyaId;"+this.ruyaId);
  
    this.ruyalariGetir.ruyaGetir(this.kelime).subscribe(data => this.ruyalarim = data[this.ruyaId]);
  
  }


}
