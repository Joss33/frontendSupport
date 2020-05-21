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
  @Input() filterClients = [];
  supportID = '';

  clientsOrSupports = false;

  Clients = [];

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
      this.clientService.getAllClients().subscribe((client) => {
        this.Clients = client;
        this.supportClients = this.Supports.map((support: any) => {
          // tslint:disable-next-line: no-string-literal
          support['clients'] = this.Clients.map((clientes: any) => {
            if (support.clients === clientes._id) {
              return clientes;
            }
          });
          return support;
        });
      });
    });
  }

  updateSupport() {
    for (let i = 0; i <= this.support.clients.length; i++) {
      if (this.support.clients[i]) {
        const selectedCustomer = i;
        this.router.navigate([
          // tslint:disable-next-line: no-string-literal
          `app/support/update/${this.supportID}/${this.support.clients[selectedCustomer]['_id']}`,
        ]);
      }
    }
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
