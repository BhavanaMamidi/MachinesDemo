import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { machinesService } from '../service/machines.service'; // Update the path accordingly
import { Machine } from '../models/machine.model'; // Update the path accordingly

@Component({
  templateUrl: './machine-detail-page.component.html',
  styleUrls: ['./machine-detail-page.component.css']
})
export class MachineDetailPageComponent implements OnInit {
  // machine: Machine | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private machineservice: machinesService
  // ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const machineId = params['id'];
  //     this.getMachineDetails(machineId);
  //   });
  // }

  // getMachineDetails(machineId: string): void {
  //   this.machineservice.getMachineById(machineId).subscribe(response => {
  //     this.machine = response;
  //   });
  // }

  pageTitle = 'Machine Detail';
  errorMessage = '';
  machine: Machine | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private machineService: machinesService) {
  }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getMachine(id);
    }
  }

  getMachine(id: string): void {
    this.machineService.getMachineById(id).subscribe({
      next: machine => this.machine = machine,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

}




