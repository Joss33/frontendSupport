import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() supportPlusClick: EventEmitter<any> = new EventEmitter();
  supportID = '';

  clientsOrSupports = false;

  Clients = [];

  Supports = [];
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

  supportClients = [];

  constructor(
    private supportService: SupportService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSupports();
  }

  buttonSupportPlus(support?) {
    this.supportID = support._id;
    this.support = support;
    this.supportPlusClick.emit(this.clientsOrSupports);
  }

  getSupports() {
    this.supportService.getAllSupports().subscribe((supports) => {
      this.Supports = supports;
    });
  }
  getClients() {
    this.clientService.getAllClients().subscribe((clients) => {
      this.Clients = clients;
    });
  }

  // getSupportClients(supports, clients) {
  //   this.supportClients = supports.map((support) => {
  //     support['clients'] = [];
  //     support['clients'] = clients.map((client) => {
  //       if (support.clients === client._id) {
  //         return client;
  //       }
  //     });
  //     return support;
  //   });
  //   console.log(this.supportClients);
  // }

  updateSupport() {
    this.router.navigate(['app/support/update', this.supportID]);
  }

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
