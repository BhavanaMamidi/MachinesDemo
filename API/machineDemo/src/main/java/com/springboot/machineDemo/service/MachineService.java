package com.springboot.machineDemo.service;

import java.util.List;
import java.util.Optional;

import com.springboot.machineDemo.model.Machine;


public interface MachineService {
	
	List<Machine> listAllMachines();
	Machine addMachine(Machine machine);
	//Optional<Machine> getMachineById(String id);
	Machine getMachineById(String id);
	Machine updateMachine(String id, Machine machine);
	void deleteMachine(String id);

}
