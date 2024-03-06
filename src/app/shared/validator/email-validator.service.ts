import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors|null>((subscriber)=> {

      if( email === 'fernando@google.com'){
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    });


    return httpCallObservable;


  }
 /*  validate(control: AbstractControl ):Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({ email })

    return of({

      emailTaken: true
    })

  } */




}
