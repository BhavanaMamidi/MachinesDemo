package com.springboot.machineDemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.machineDemo.exception.MachineNotFoundException;
import com.springboot.machineDemo.model.Machine;
import com.springboot.machineDemo.repository.MachineRepository;

@Service
public class MachineServiceImpl implements MachineService{
	@Autowired
    private MachineRepository machineRepository;
	
	@Override
	public List<Machine> listAllMachines() {
        return machineRepository.findAll();
    }
	
	@Override
    public Machine addMachine(Machine machine) {
        return machineRepository.save(machine);
    }
	
//	@Override
//    public Optional<Machine> getMachineById(String id) {
//        return machineRepository.findById(id);
//    }
	
	@Override
    public Machine getMachineById(String id) {
        return machineRepository.findById(id)
                .orElseThrow(() -> new MachineNotFoundException("Machine not found"));
    }
	
	@Override
    public Machine updateMachine(String id, Machine machine) {
        Machine existingMachine = machineRepository.findById(id)
                .orElseThrow(() -> new MachineNotFoundException("Machine not found"));

        existingMachine.setName(machine.getName());
        existingMachine.setCreatedOn(machine.getCreatedOn());
        existingMachine.setUpdatedOn(machine.getUpdatedOn());

        return machineRepository.save(existingMachine);
    }

    @Override
    public void deleteMachine(String id) {
        Machine machine = machineRepository.findById(id)
                .orElseThrow(() -> new MachineNotFoundException("Machine not found"));

        machineRepository.delete(machine);
    }
    
}
