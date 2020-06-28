import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuyaService } from '../ruya.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public ruyalarim: any;
  constructor(private activatedRoute: ActivatedRoute, private ruyalariGetir: RuyaService ) { }

  ngOnInit() { 
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.ruyalarim = this.ruyalariGetir.ruyalar;
  }
 
  ruyaAl(kelime){

this.ruyalariGetir.ruyaGetir(kelime).subscribe(data => this.ruyalarim = data);
      
  }
}


/*
console.log("Gelen Kelime"+kelime);
      this.ruyalarim = this.ruyalariGetir.ruyalar;
      */
     