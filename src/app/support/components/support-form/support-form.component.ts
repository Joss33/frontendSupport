import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Support } from './../../../core/model/support.model';
import { SupportService } from './../../../core/services/support/support.service';
import { Client } from './../../../core/model/client.model';
import { ClientService } from './../../../core/services/client/client.service';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.scss'],
})
export class SupportFormComponent implements OnInit {
  titleForm = 'Agregar';

  edit = false;

  client: Client = {
    name: '',
    phone: '',
    company: '',
  };

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.supportService.getSupport(params.id).subscribe((res) => {
        this.support = res;
        this.edit = true;
        this.titleForm = 'Editar';
      });
    } else {
      if (params.clientID) {
        this.edit = false;
        this.titleForm = 'Agregar';
        this.clientService.getClient(params.clientID).subscribe((res) => {
          this.client = res;
        });
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
