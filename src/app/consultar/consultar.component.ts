import { ConsultarService } from './consultar.service';
import { Component, OnInit } from '@angular/core';
import { Imposto } from './imposto';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
impostos!: Imposto[];

  constructor(private consultarService: ConsultarService ) { }

  displayBasic!: boolean;


  ngOnInit(): void {
    this.consultarService.getImpostos().then(data => this.impostos = data);
  }

  showBasicDialog() {
    this.displayBasic = true;
}

}
