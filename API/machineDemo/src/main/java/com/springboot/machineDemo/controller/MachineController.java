package com.springboot.machineDemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.machineDemo.model.Machine;
import com.springboot.machineDemo.service.MachineServiceImpl;
import com.springboot.machineDemo.exception.MachineNotFoundException;
//import com.springboot.machineDemo.repository.MachineRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class MachineController {
	@Autowired
    MachineServiceImpl machineService;
	
//	@Autowired
//    MachineRepository machineRepo;
	
	@GetMapping("/machines")
    public List<Machine> getAllMachines() {
        return machineService.listAllMachines();  
		//return machineRepo.findAll();  
    }
	
	@PostMapping("/addMachine")
    public ResponseEntity<Machine> addMachine(@RequestBody Machine machine) {
        if (machine.getCreatedOn() == null) {
            machine.setCreatedOn(LocalDateTime.now());
        }
        if (machine.getUpdatedOn() == null) {
            machine.setUpdatedOn(LocalDateTime.now());
        }
        Machine saveMachine = machineService.addMachine(machine);
        return ResponseEntity.ok(saveMachine);
    }
	
	
//	@GetMapping("/machine/{id}")
//	public ResponseEntity<Machine> getMachineById(@PathVariable String id) {
//	    Optional<Machine> machine = machineService.getMachineById(id);
//	    if (!machine.isPresent()) {
//	        throw new MachineNotFoundException("Machine not found");
//	    }
//	    return ResponseEntity.ok(machine.get());
//	}
	
	@GetMapping("/machine/{id}")
	public ResponseEntity<Machine> getMachineById(@PathVariable String id) {
	    Machine machine = machineService.getMachineById(id);
	    return ResponseEntity.ok(machine);
	}

	
	@PutMapping("/machine/{id}")
    public ResponseEntity<Machine> updateMachine(@PathVariable String id, @RequestBody Machine machine) {
        Machine updatedMachine = machineService.updateMachine(id, machine);
        return ResponseEntity.ok(updatedMachine);
    }
	
	@DeleteMapping("/machine/{id}")
    public ResponseEntity<Void> deleteMachine(@PathVariable String id) {
        machineService.deleteMachine(id);
        return ResponseEntity.noContent().build();
    }
	
//	@GetMapping("/machines")
//    public List<Machine> getAllMachines() {
//        return machineService.listAllMachines();  
//    }
//	
//
//	@GetMapping("/machine/{id}")
//    public Machine getMachineById(@PathVariable String id) {
//        try {
//            return machineService.getMachineById(id);
//        } catch (MachineNotFoundException e) {
//            return null; 
//        }
//    }
//
//    @PostMapping("/machine")
//    public Machine addMachine(@RequestBody Machine machine) {
//            return machineService.addMachine(machine);
//    }
//
//    @PutMapping("/machine/{id}")
//    public Machine updateMachine(@PathVariable String id, @RequestBody Machine machine) {
//        try {
//            return machineService.updateMachine(id, machine);
//        } catch (MachineNotFoundException e) {
//            return null; 
//        } 
//    }
//
//    @DeleteMapping("/machine/{id}")
//    public void deleteMachine(@PathVariable String id) {
//        try {
//            machineService.deleteMachine(id);
//        } catch (MachineNotFoundException e) {
//            
//        } 
//
//    }
	
}



    

    
