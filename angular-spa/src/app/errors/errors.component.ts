import { AppState } from './../store/app.reducers';
import { Store } from '@ngrx/store';
import { ErrorModel } from './errors.model';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as ErrorsActions from './store/errors.actions';
import * as fromErrors from './store/errors.reducer'

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  errorState: Observable<fromErrors.State>;
  errors:ErrorModel[];

  constructor(private store:Store<AppState>
  ) {
    
   }

  ngOnInit() {
      this.FetchErrors();
  }

  FetchErrors(){
   this.errorState=this.store.select('errors'); 
  }

  Remove(error){
    this.store.dispatch(new ErrorsActions.RemoveErrors(error));
    this.FetchErrors();
  }

  Add(){
    var error=new ErrorModel("100","Error - 100");
    this.store.dispatch(new ErrorsActions.AddErrors(error));
    this.FetchErrors();
  }

}
