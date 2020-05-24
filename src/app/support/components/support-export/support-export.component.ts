import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SupportService } from './../../../core/services/support/support.service';
import { ClientService } from './../../../core/services/client/client.service';
import { Support } from './../../../core/model/support.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA_SUPPORT = [];
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-support-export',
  templateUrl: './support-export.component.html',
  styleUrls: ['./support-export.component.scss'],
})
export class SupportExportComponent implements OnInit {
  Supports = [];
  support: Support = {
    date: '',
    detail: '',
    priority: '',
    remoteProgram: '',
    solution: '',
    solutionDate: '',
    state: '',
    clients: '',
    users: '',
  };
  Clients = [];
  supportClients = [];

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    // 'Programa Remoto',
    // 'solucion',
    // 'Fecha Solucion',
    // 'Estado',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private supportService: SupportService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getAllSupport();
  }

  getAllSupport() {
    this.supportService.getAllSupports().subscribe((res) => {
      this.Supports = res;
    });

    // this.supportService.getAllSupports().subscribe((supports) => {
    //   this.Supports = supports;
    //   this.clientService.getAllClients().subscribe((client) => {
    //     this.Clients = client;
    //     this.supportClients = this.Supports.map((support: any) => {
    //       // tslint:disable-next-line: no-string-literal
    //       support['clients'] = this.Clients.map((clientes: any) => {
    //         if (support.clients === clientes._id) {
    //           return clientes;
    //         }
    //       });
    //       return support;
    //     });
    //   });
    // });
  }

  exportAsXLSX(): void {
    this.supportService.exportToExcel(this.dataSource.data, 'my_export');
  }
  exportAsXLSXFilter(): void {
    this.supportService.exportToExcel(
      this.dataSource.filteredData,
      'my_export'
    );
  }
}
