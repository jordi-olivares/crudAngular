import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pet} from '../model/pet.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {}
  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>('http://localhost:3000/pets');
  }
  getPet(id: number):Observable<Pet>{
    return this.http.get<Pet>('http://localhost:3000/pets/'+id);
  }
  newPet(pet:Pet): Observable<Pet>{
    return this.http.post<Pet>('http://localhost:3000/pets',pet)
  }
  editPet(pet: Pet,id: number): Observable<Pet>{
    return this.http.put<Pet>('http://localhost:3000/pets/'+id,pet);
  }
  deletePet(id: number):Observable<Pet>{
    return this.http.delete<Pet>('http://localhost:3000/pets/'+id);
  }
}
