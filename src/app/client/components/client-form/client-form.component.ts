import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from './../../../core/model/client.model';
import { ClientService } from './../../../core/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  client: Client = {
    name: '',
    phone: '',
    company: '',
  };
  titleForm = 'Agregar';

  edit = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.clientService.getClient(params.id).subscribe((res) => {
        console.log(res);
        this.client = res;
        this.edit = true;
        this.titleForm = 'Editar';
      });
    } else {
    }
  }

  submitClient() {
    if (
      this.client.name !== '' ||
      this.client.phone !== '' ||
      this.client.company !== ''
    ) {
      this.clientService.createClient(this.client).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/app']);
        },
        (err) => console.log(err)
      );
    } else {
      alert('Todos los campos son requeridos');
    }
  }

  updateClient() {
    const clientID = this.activatedRoute.snapshot.params;
    if (
      this.client.name !== '' ||
      this.client.phone !== '' ||
      this.client.company !== ''
    ) {
      this.clientService.updateClient(clientID.id, this.client).subscribe(
        (res) => {
          this.router.navigate(['/app']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      alert('Todos los campos son requeridos');
    }
  }
}
