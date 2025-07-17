import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Damian',
  gender: 'male',
  age: 30,
  address: '123 Main St',
};

const client2 = {
  name: 'Lucia',
  gender: 'female',
  age: 25,
  address: '456 Elm St',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export default class UncommonPageComponent {
  // i18n select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n plural
  clientsMap = signal({
    '=0': 'Actualmente no tenemos ningún cliente esperando.',
    '=1': 'Actualmente hay 1 cliente esperando.',
    '=2': 'Actualmente hay 2 clientes esperando.',
    other: 'Actualmente hay # clientes esperando.',
  });

  clients = signal(['Maria', 'Jose', 'Pedro', 'Ana', 'Luis', 'Carmen']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1)); // Elimina el primer cliente
  }

  // KeyValue Pipe
  profile = signal({
    name: 'Damian',
    age: 30,
    address: '123 Main St',
  });

  // Async Pipe con promesas
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡Hola desde una promesa!');
      console.log('Promesa resuelta');
    }, 3500);
  });
  // Async Pipe con Observables
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Observable ejecutado(tap)', value))
  );
}
