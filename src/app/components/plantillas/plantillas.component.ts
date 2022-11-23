import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantillaService } from 'src/app/services/plantilla.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  plantillaList: any = [];
  plantillaForm = this.formBuilder.group({
    nombre: '',
  })

  constructor(private plantillaService: PlantillaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllplantilla();
  }
  getAllplantilla() {
    this.plantillaService.getAllplantillaData().subscribe((data: {}) => {
      this.plantillaList = data;
    });
  }
  newplantillaEntry() {
    this.plantillaService.newPlantilla(this.plantillaForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/plantilla']).then(() => {
          window.location.reload();
        })
      }
    );
  }




}
