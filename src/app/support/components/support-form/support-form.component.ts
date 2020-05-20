import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Support } from './../../../core/model/support.model';
import { SupportService } from './../../../core/services/support/support.service';
import { Client } from './../../../core/model/client.model';
import { ClientService } from './../../../core/services/client/client.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.scss'],
})
export class SupportFormComponent implements OnInit {
  titleForm = 'Agregar';
  // typeInput = 'date';

  edit = false;

  client: Client = {
    name: '',
    phone: '',
    company: '',
  };

  support: Support = {
    date: '',
    detail: '',
    priority: '',
    remoteProgram: '',
    solution: '',
    solutionDate: '',
    state: '',
    clients: '',
    users: '5eb05e9b02b4363234c4599e',
  };

  constructor(
    private supportService: SupportService,
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id && params.clientID) {
      this.supportService.getSupport(params.id).subscribe((res) => {
        this.support = res;
        this.support.date = moment(this.support.date).format('YYYY-DD-MM');
        this.support.solutionDate = moment(this.support.date).format(
          'YYYY-DD-MM'
        );
        this.edit = true;
        this.titleForm = 'Editar';
        // this.typeInput = 'text';
      });
      this.clientService.getClient(params.clientID).subscribe((res) => {
        this.client = res;
      });
      this.support.clients = params.clientID;
    } else {
      if (params.clientID) {
        this.edit = false;
        this.titleForm = 'Agregar';
        // this.typeInput = 'date';
        this.clientService.getClient(params.clientID).subscribe((res) => {
          this.client = res;
        });
        this.support.clients = params.clientID;
      }
    }
  }

  updateSupport() {
    const supportID = this.activatedRoute.snapshot.params;
    this.supportService.updateSupport(supportID.id, this.support).subscribe(
      (res) => {
        this.router.navigate(['/app']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitSupport() {
    this.supportService.createSupport(this.support).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/app']);
      },
      (err) => console.log(err)
    );
  }
}
