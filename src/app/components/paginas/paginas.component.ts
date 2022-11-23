import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PaginasService } from 'src/app/services/paginas.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  paginasList: any = [];
  paginasForm = this.formBuilder.group({
    codigo: '',
  })

  constructor(private paginasService: PaginasService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit()  {
    this.getAllpaginas();
  }
  getAllpaginas() {
    this.paginasService.getAllpaginasData().subscribe((data: {}) => {
      this.paginasList = data;
    });
  }
  newpaginasEntry() {
    this.paginasService.newpaginas(this.paginasForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/paginas']).then(() => {
          window.location.reload();
        })
      }
    );
  }
}
