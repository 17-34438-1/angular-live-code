import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportBlankBayViewService {
  igmMisIp : string;
  igmMisPort : string;


  constructor(
    private httpClient: HttpClient
  ) { 
    this.igmMisIp=environment.igmMisIp;
    this.igmMisPort=environment.igmMisPort;
  }

  getExportBlankBayViewVesselList(){
    return this.httpClient.get(this.igmMisIp+this.igmMisPort+'/ExportReport/ExportBlankBayViewVesselList/');
   }
   getExportBlankBayViewVesselInfo(key:any){
    if(key==""){
      key=0;
    }
    return this.httpClient.get(this.igmMisIp+this.igmMisPort+'/ExportReport/ExportBlankBayVesselInfo/'+key);
   }

   getExportBlankBayViewList(key:any){
    if(key==""){
      key=0;
    }
    return this.httpClient.get(this.igmMisIp+this.igmMisPort+'/ExportReport/ExportBlankBayViewList/'+key);
   }
}
