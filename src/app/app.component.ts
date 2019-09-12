import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testrouter';
  router$: any;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.router$ = this.store.select(fromStore.getRouterFeature);
  }
}
