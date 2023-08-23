import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class machinesService {
  
  baseUrl = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  // Get All Machines
  getAllMachines(): Observable<Machine[]>{
    return this.http.get<Machine[]>(this.baseUrl + "/machines");
  }

  //Get machine details by Id
  getMachineById(id: string): Observable<Machine> {
    return this.http.get<Machine>(this.baseUrl + "/machine/" + id);
  }

  // Add a Machine
  addMachine(machine: Machine): Observable<Machine>{
    return this.http.post<Machine>(this.baseUrl + "/addMachine" , machine);
  }

  // Delete a Machine
  deleteMachine(id: string): Observable<Machine>{
    return this.http.delete<Machine>(this.baseUrl + "/machine/" + id);
  }

  // Update a Machine
  updateMachine(id: string, machine:Machine): Observable<Machine>{
    return this.http.put<Machine>(this.baseUrl + "/machine/" + id, machine);
  }

}
