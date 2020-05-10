import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  clientID = '';
  client: Client = {
    name: '',
    phone: '',
    company: '',
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  buttonPlus(clientID?, client?) {
    this.clientID = clientID;
    this.client = client;
    if (this.opctionView === 0) {
      this.opctionView = 1;
    } else {
      this.opctionView = 0;
    }
  }

  updateClient() {
    this.router.navigate(['app/client/edit', this.clientID]);
  }

  deleteClient() {
    this.clientService.deleteClient(this.clientID).subscribe(
      (res) => {
        this.getClients();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
