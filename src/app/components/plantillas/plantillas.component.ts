import { Component, OnInit } from '@angular/core';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  plantillaList: any = [];
  constructor(private plantillaService: PlantillaService) { }

  ngOnInit(){
    this.getAllplantilla();
  }
  getAllplantilla() {
    this.plantillaService.getAllplantillaData().subscribe((data: {}) => {
      this.plantillaList = data;
    });
  }


}
