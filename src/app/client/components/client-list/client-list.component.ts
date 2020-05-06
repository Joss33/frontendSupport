import { Component, OnInit } from '@angular/core';

import { Client } from './../../../core/model/client.model';
import { ClientService } from './../../../core/services/client/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  navBarTitle = 'Clientes';
  opctionView = 0;

  filterClients: Client[] = [];

  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  buttonPlus() {
    if (this.opctionView === 0) {
      this.opctionView = 1;
    } else {
      this.opctionView = 0;
    }
  }
}
