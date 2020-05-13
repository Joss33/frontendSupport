import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Support } from './../../../core/model/support.model';
import { Client } from './../../../core/model/client.model';
import { SupportService } from './../../../core/services/support/support.service';
import { ClientService } from './../../../core/services/client/client.service';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss'],
})
export class SupportListComponent implements OnInit {
  supportID = '';
  ClientID = '';

  opctionView = 0;

  Clients: Client = {
    name: '',
    phone: '',
    company: '',
  };

  supports: Support[] = [];
  support: Support = {
    date: new Date(),
    detail: '',
    priority: '',
    remoteProgram: '',
    solution: '',
    solutionDate: new Date(),
    state: '',
    clients: '',
    users: '',
  };

  constructor(
    private supportService: SupportService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSupports();
    this.getClientByID();
  }

  buttonSupportPlus(support?) {
    this.supportID = support._id;
    // this.ClientID = support.client;
    if (this.opctionView === 0) {
      this.opctionView = 1;
    } else {
      this.opctionView = 0;
    }
  }

  getSupports() {
    this.supportService.getAllSupports().subscribe((supports) => {
      this.supports = supports;
    });
    this.support.clients = this.ClientID;
  }

  getClientByID() {
    this.clientService.getClient(this.ClientID).subscribe(
      (res) => {
        this.Clients = res;
        console.log(this.Clients);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateSupport() {}

  deleteSupport() {
    this.supportService.deleteSupport(this.supportID).subscribe(
      (res) => {
        this.getSupports();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
