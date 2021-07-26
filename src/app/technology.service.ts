import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Technology } from './technology';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`Messageservice: ${message}`);
  }
  
  private technologiesUrl = 'api/technologies';

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.technologiesUrl)
      .pipe(
        tap(_ => this.log('fetched technologies')),
        catchError(this.handleError<Technology[]>('getTechnologies', []))
      );
  }

  getTechnology(id: number): Observable<Technology> {
    const url = `${this.technologiesUrl}/${id}`;
    return this.http.get<Technology>(url).pipe(
      tap(_ => this.log(`fetched technology id=${id}`)),
      catchError(this.handleError<Technology>(`getTechnology id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  /** PUT: update the technology on the server */
  updateTechnology(technology: Technology): Observable<any> {
    return this.http.put(this.technologiesUrl, technology, this.httpOptions).pipe(
      tap(_ => this.log(`updated technology id=${technology.id}`)),
      catchError(this.handleError<any>('updateTechnology'))
    );
  }
  
  /** POST: add a new technology to the server */
  addTechnology(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.technologiesUrl, technology, this.httpOptions).pipe(
      tap((newTechnology: Technology) => this.log(`added technology w/ id=${newTechnology.id}`)),
      catchError(this.handleError<Technology>('addTechnology'))
    );
  }

  /** DELETE: delete the technology from the server */
  deleteTechnology(id: number): Observable<Technology> {
    const url = `${this.technologiesUrl}/${id}`;

    return this.http.delete<Technology>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted technology id=${id}`)),
      catchError(this.handleError<Technology>('deleteTechnology'))
    );
  }

  /* GET technologies whose name contains search term */
  searchTechnologies(term: string): Observable<Technology[]> {
    if (!term.trim()) {
      // if not search term, return empty technology array.
      return of([]);
    }
    return this.http.get<Technology[]>(`${this.technologiesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found technologies matching "${term}"`) : 
        this.log(`no technologies matching "${term}"`)),
      catchError(this.handleError<Technology[]>('searchTechnologies', []))
    );
  }

  orderId(technologies: InMemoryDataService) {
    for(let i = 0, delta = 0; i<=technologies.createDb.length; i++) {
      console.log("HELLOOOO" + i)
    }
  }


}
