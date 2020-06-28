import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuyaService {
   public ruyalar: any;
   public url:string='http://yerelsecim.co/servis/gokhan_ruya/ruya_servis.php?kelime_al=';


  constructor(private http:HttpClient) {}
  

    ruyaGetir(kelime){
      return this.http.get(this.url+kelime);
  }

   
    
  
  





    /*
    this.ruyalar = [
      {adi:'aslan', aciklama:'ruyada aslan',id:0},
      {adi:'kaplan', aciklama:'ruyada kaplan',id:1},
      {adi:'yılan', aciklama:'ruyada yılan',id:2},
      {adi:'ev', aciklama:'ruyada ev',id:3}
  
  
  
  
  
  
  ]
  */


    
   


}
