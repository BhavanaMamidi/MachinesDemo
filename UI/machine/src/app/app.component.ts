import { Component, OnInit } from '@angular/core';
import { Machine } from './models/machine.model';
import { machinesService } from './service/machines.service';
import { ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'machines';
  machines: Machine[] = [];
  machine: Machine = {
    id: "",
    name: "",
    createdOn: null,
    updatedOn: null
  }
  isEditMode: boolean = false;

  message: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  messageTimeout: any;

  selectedMachine: Machine | null = null;
  errorMessage = '';
  @ViewChild('detailsContainer') detailsContainer!: ElementRef;
  @ViewChild('form') form!: NgForm;

  constructor(private machineservice: machinesService) {
    
  }

// constructor(private machineservice: machinesService, private router: Router) {}

// navigateToMachineDetailPage(machineId: string): void {
//   this.router.navigate(['machine', machineId]);
// }
  
  ngOnInit(): void {
    this.getAllMachines();
  }

  getAllMachines() {
   this.machineservice.getAllMachines()
   .subscribe(
    response => {
      this.machines= response;
    });
  }

  // getMachineById(machineId: string) {
  //   this.machineservice.getMachineById(machineId)
  //     .subscribe(
  //       response => {
  //         this.selectedMachine = response; // Update the selected machine
  //       }
  //       // ,error => {
  //       //   console.error('Error fetching machine details:', error);
  //       // }
  //     );
  // }

  getMachineById(id: string): void {
    this.machineservice.getMachineById(id).subscribe({
      next: selectedMachine => {this.selectedMachine = selectedMachine;
        this.scrollToDetails(); 
        this.form.resetForm();},
      error: err => this.errorMessage = err
    });
  }

  clearSelectedMachineDetails() {
    this.selectedMachine = null;
  }
  

  scrollToDetails() {
    if (this.detailsContainer) {
      this.detailsContainer.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  deleteMachine(id: string, event: Event){
    event.stopPropagation();
    this.machineservice.deleteMachine(id)
    .subscribe(
      resonse => {
        this.getAllMachines();
        this.showSuccessMessage('Machine deleted successfully');
        //this.selectedMachine = null;
        this.form.resetForm();
      }
      // ,error => {
      //   this.showErrorMessage('Error deleting machine');
      // }
      );
  }

  populateForm(machine: Machine, event: Event){
    event.stopPropagation();
    //this.selectedMachine = null;
    this.machine = machine;
    this.isEditMode = true;
  }

  updateMachine(id: string, machine: Machine){
    this.machineservice.updateMachine(id, machine)
    .subscribe(
      response => {
        this.getAllMachines();
        this.showSuccessMessage('Machine updated successfully');
      }
      // ,error => {
      //   this.showErrorMessage('Error updating machine');
      // }
    )
  }
  
  onSubmit() {
    const existingMachineIndex = this.machines.findIndex(m => m.id === this.machine.id);
    if (existingMachineIndex !== -1) {
      this.updateMachine(this.machine.id, this.machine);
      this.machine = {
        id: "",
        name: "",
        createdOn: null,
        updatedOn: null     
      };   
    } else {
      this.machineservice.addMachine(this.machine)
        .subscribe(
          response => {
            this.getAllMachines();
            this.showSuccessMessage('Machine added successfully');
            //this.selectedMachine = null;
            this.machine = {
              id: "",
              name: "",
              createdOn: null,
              updatedOn: null     
            };
          }
          // ,error => {
          //   this.showErrorMessage('Error adding machine');
          // }
        );
    }
    this.isEditMode = false;
    this.form.resetForm();
  }

  private showSuccessMessage(message: string) {
    this.message = message;
    this.isSuccess = true;
    this.isError = false;
    this.setMessageTimeout();
  }
  
  private showErrorMessage(message: string) {
    this.message = message;
    this.isSuccess = false;
    this.isError = true;
    this.setMessageTimeout();
  }
  
  private setMessageTimeout() {
    clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => {
      this.message = '';
      this.isSuccess = false;
      this.isError = false;
    }, 3000); 
  }
  
}

