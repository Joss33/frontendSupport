import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from './../../../core/model/client.model';
import { SupportListComponent } from './../../../support/components/support-list/support-list.component';
import { ClientService } from './../../../core/services/client/client.service';
import { LoginService } from './../../../core/services/login/login.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @ViewChild('support')
  supportListComponent: SupportListComponent;

  listTitle = 'Clientes';
  listTitleIcons = 'fas fa-users';
  toast = 0;

  navBarTitle = 'Clientes';
  opctionView = 0;

  clientsOrSupports = true;

  filterClients = [];

  clients: Client[] = [];
  clientID = '';
  client: Client = {
    name: '',
    phone: '',
    company: '',
  };

  constructor(
    private clientService: ClientService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getClients();
  }

  // ///////////////////////////////////////////////////////////////////
  // CRUD ClientsList Start
  getClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.clients = clients;
    });
  }

  buttonPlus(clientID?, client?) {
    this.listTitle = 'Clientes';
    this.clientID = clientID;
    this.client = client;
    this.listTitleIcons = 'fas fa-users';
    this.clientsOrSupports = true;
    if (this.opctionView === 0) {
      this.opctionView = 1;
    } else {
      this.opctionView = 0;
    }
  }

  updateClient() {
    this.clientsOrSupports = true;
    this.router.navigate(['app/client/edit', this.clientID]);
  }

  toasts() {
    this.toast = 1;
    setTimeout(() => {
      if (this.toast === 1) {
        this.toast = 0;
      }
    }, 3000);
  }

  deleteClient() {
    this.clientsOrSupports = true;
    this.toasts();
    this.clientService.deleteClient(this.clientID).subscribe(
      (res) => {
        this.getClients();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // CRUD ClientsList End
  // ///////////////////////////////////////////////////////////////////

  // Functions Supports Start
  // //////////////////////////////////////////////////////////////////
  clickSupportPlus(event) {
    this.clientsOrSupports = event;
    this.listTitle = 'Soportes';
    this.listTitleIcons = 'fas fa-wrench';
    if (this.opctionView === 0) {
      this.opctionView = 1;
    } else {
      this.opctionView = 0;
    }
  }

  createSupport() {
    this.router.navigate(['app/support/create', this.clientID]);
  }

  updateSupport() {
    this.clientsOrSupports = false;
    this.supportListComponent.updateSupport();
  }

  deleteSupport() {
    this.clientsOrSupports = false;
    this.toasts();
    this.supportListComponent.deleteSupport();
  }
  // //////////////////////////////////////////////////////////////////
  // Functions Supports End
}
